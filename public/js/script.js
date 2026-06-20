async function search() {
    const query = document.getElementById('searchInput').value;
    if (!query) return;
    
    try {
        const res = await fetch(`/music/authorSongs/${query}`);
        const songs = await res.json();
        
        const resultsDiv = document.getElementById('results');
        
        if (!songs || songs.length === 0) {
            resultsDiv.innerHTML = '<div class="no-results">Ничего не найдено</div>';
            return;
        }
        
        resultsDiv.innerHTML = songs.map(s => `
            <div class="song-card">
                <div class="song-info">
                    <h3>${s.name}</h3>
                    <span>${s.genre || 'Жанр не указан'}</span>
                </div>
                <div>
                    <a href="${s.youtube_url}" target="_blank" class="listen-btn">▶ Слушать</a>
                </div>
            </div>
        `).join('');
    } catch (e) {
        console.error(e);
    }
}