//Много от нейронки как и весь фронт (бэк/апи я делал сам)
async function search() {
    const type = document.getElementById('searchType').value;
    const query = document.getElementById('searchInput').value;
    if (!query) return;
    
    let url;
    if (type === 'author') {
        url = `/music/authorAlbums/${query}`;
    } else if (type === 'album') {
        url = `/music/albumSongs/${query}`;
    } else if (type === 'song') {
        url = `/music/songs/${query}`;
    }
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        
        const albumCoverDiv = document.getElementById('albumCover');
        const artistPhotoDiv = document.getElementById('artistPhoto');
        const resultsDiv = document.getElementById('results');
        
        albumCoverDiv.innerHTML = '';
        artistPhotoDiv.innerHTML = '';
        resultsDiv.innerHTML = '';
        
        let songs, albums, author;
        
        if (Array.isArray(data)) {
        songs = data;
        albums = songs[0]?.Album || null;
        author = songs[0]?.Author || null;;
        } else {
        songs = data.songs || [];
        albums = Array.isArray(data.albums) ? data.albums : null;
        author = Array.isArray(data.author) ? data.author[0] : data.author || null;
        }
        
        if (type === 'album') {
            if (!songs || songs.length === 0) {
                resultsDiv.innerHTML = '<div class="no-results">Nothing was found</div>';
                return;
            }
            else {
                for (album in albums) {
                    if (albums[album] && albums[album].cover_url) {
                        albumCoverDiv.innerHTML += `
                        <div class="album-cover">
                        <img src="${albums[album].cover_url}" alt="Album cover">
                        <p class="album-name">${albums[album].name || ''}</p>
                        <p class="album-info">Number of songs: ${albums[album].number_of_songs || ''}</p>
                        `;
                        albumCoverDiv.innerHTML += songs.filter(s => s.id_album === albums[album].id_album).map(s => `
                        <div class="song-card">
                        <div class="song-info">
                        <h3>${s.name}</h3>
                        <span>${s.genre || '-'}</span>
                        </div>
                        <div>
                        <a href="${s.youtube_url}" target="_blank" class="listen-btn">▶ Play</a>
                        </div>
                        </div>
                        `).join('');
                    }
                albumCoverDiv.innerHTML += `<br>`;
                }
            }
        } else if (type === 'song') {
            resultsDiv.innerHTML = songs.map(s => `
            <div class="song-card">
                <div class="song-info">
                    <h3>${s.name}</h3>
                    <span>${s.genre || '-'}</span>
                </div>
                <div>
                    <a href="${s.youtube_url}" target="_blank" class="listen-btn">▶ Play</a>
                </div>
            </div>
        `).join('');
        } 
        else if (type === 'author') {
            if (!albums || albums.length === 0) {
                resultsDiv.innerHTML = '<div class="no-results">Nothing was found</div>';
                return;
            }
            else {
                for (album in albums) {
                    if (albums[album] && albums[album].cover_url) {
                        albumCoverDiv.innerHTML += `
                        <div class="album-cover">
                        <img src="${albums[album].cover_url}" alt="Album cover">
                        <p class="album-name">${albums[album].name || ''}</p>
                        <p class="album-info">Number of songs: ${albums[album].number_of_songs || ''}</p>
                        `;
                    }
                }   
            }
        } 
        
        if (author && author.photo_url) {
            artistPhotoDiv.innerHTML = `
            <div class="artist-photo">
            <img src="${author.photo_url}" alt="Artist's photo">
            <p class="artist-name">${author.name || ''}</p>
            <p class="artist-career">Career started in ${author.career_start_year || ''}</p>
            </div>
            `;
        }
        
    } catch (e) {
        console.error(e);
        document.getElementById('results').innerHTML = 
            '<div class="no-results">Error</div>';
    }
}
function exportToExcel() {


}