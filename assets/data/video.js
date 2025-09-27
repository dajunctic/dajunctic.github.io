// Only run this script on the video page
if (document.querySelector('.youtube-video-section')) {

    const mainVideoIframe = document.querySelector('.main-video iframe');
    const mainVideoTitle = document.querySelector('.main-video .video-title');
    const videoListContainer = document.getElementById('video-list');
    const playlistTabsContainer = document.getElementById('playlist-tabs');
    const playlistTitle = document.getElementById('playlist-title');
    const playlistDescription = document.getElementById('playlist-description');

    let playlistsData = {}; // To store fetched playlist data

    function loadPlaylist(playlistKey) {
        const playlist = playlistsData[playlistKey];
        if (!playlist) return;

        // Fade out the list before changing content
        videoListContainer.classList.add('fading-out');

        setTimeout(() => {
            videoListContainer.innerHTML = '';

            // Update title and description for the current playlist
            playlistTitle.setAttribute('data-translate-key', playlist.titleKey);
            playlistDescription.setAttribute('data-translate-key', playlist.descriptionKey);

            playlist.videos.forEach((video, index) => {
                const videoElement = document.createElement('div');
                videoElement.classList.add('vid');
                if (index === 0) {
                    videoElement.classList.add('active');
                }
                videoElement.innerHTML = `
                    <div class="img-container">
                        <img src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg" alt="https://www.youtube.com/embed/${video.id}">
                    </div>
                    <h3 class='video-title'>${video.title}</h3>
                `;
                videoElement.onclick = () => {
                    mainVideoIframe.src = `https://www.youtube.com/embed/${video.id}`;
                    mainVideoTitle.textContent = video.title;
                    document.querySelectorAll('.video-list .vid').forEach(v => v.classList.remove('active'));
                    videoElement.classList.add('active');
                };
                videoListContainer.appendChild(videoElement);
            });

            if (playlist.videos.length > 0) {
                mainVideoIframe.src = `https://www.youtube.com/embed/${playlist.videos[0].id}`;
                mainVideoTitle.textContent = playlist.videos[0].title;
            }

            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.playlist === playlistKey);
            });

            // Re-apply translations and fade back in
            const currentLang = localStorage.getItem('language') || 'vi';
            if (typeof applyTranslations === 'function') {
                applyTranslations(currentLang);
            }
            videoListContainer.classList.remove('fading-out');
        }, 300); // Match the transition duration in CSS
    }

    function initializeTabs() {
        // Attach event listeners to the buttons that are already in the HTML
        document.querySelectorAll('.playlist-tabs .tab-btn').forEach(tabButton => {
            const playlistKey = tabButton.dataset.playlist;
            if (playlistKey && playlistsData[playlistKey]) {
                tabButton.onclick = () => loadPlaylist(playlistKey);
            }
        });

        // Load the first playlist based on the first button found
        const firstPlaylistKey = Object.keys(playlistsData)[0] || 'pygame';
        loadPlaylist(firstPlaylistKey);
    }

    // Fetch the playlist data from the JSON file
    fetch('/assets/data/videos.json')
        .then(response => response.json())
        .then(data => {
            playlistsData = data.playlists;
            initializeTabs();
        })
        .catch(error => console.error('Error loading video data:', error));
}