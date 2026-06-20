//Много от нейронки как и весь фронт (бэк/апи я делал сам)
async function search() {
    const type = document.getElementById('searchType').value;
    const query = document.getElementById('searchInput').value;
    if (!query) return;
    
    let url;
    if (type === 'author') {
        url = `/music/authorSongs/${query}`;
    } else if (type === 'album') {
        url = `/music/albumSongs/${query}`;
    } else if (type === 'song') {
        url = `/music/songs/${query}`;
    }
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        
        const albumCoverDiv = document.getElementById('albumCover');
        const resultsDiv = document.getElementById('results');
        
        albumCoverDiv.innerHTML = '';
        resultsDiv.innerHTML = '';
        
        let songs, album;
        
        if (Array.isArray(data)) {
        songs = data;
        album = songs[0]?.Album || null;
        } else {
        songs = data.songs || [];
        album = Array.isArray(data.album) ? data.album[0] : data.album || null;
        }
        
        if (!songs || songs.length === 0) {
            resultsDiv.innerHTML = '<div class="no-results">Nothing was found</div>';
            return;
        }
        
        if (album && album.cover_url) {
            albumCoverDiv.innerHTML = `
                <img src="${album.cover_url}" alt="Album cover">
                <p class="album-name">${album.name || ''}</p>
                <p class="album-name">Number of songs: ${album.number_of_songs || ''}</p>
            `;
        }
        
        resultsDiv.innerHTML = songs.map(s => `
            <div class="song-card">
                <div class="song-info">
                    <h3>${s.name}</h3>
                    <span>${s.genre || '-'}</span>
                </div>
                <div>
                    <a href="${s.youtube_url}" target="_blank" class="listen-btn">▶ Слушать</a>
                </div>
            </div>
        `).join('');
        
    } catch (e) {
        console.error(e);
        document.getElementById('results').innerHTML = 
            '<div class="no-results">Error</div>';
    }
}