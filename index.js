// Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.tagName === 'IMG') {
                lightboxImg.src = item.src;
                lightbox.style.display = 'flex';
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });
});


// Lightbox for Videos
const videos = document.querySelectorAll('.gallery-item[data-video]');
const lightbox = document.getElementById('video-lightbox');
const lightboxVideo = document.getElementById('lightbox-video');
const closeLightbox = document.querySelector('.lightbox .close');

// Open Lightbox
videos.forEach(video => {
    video.addEventListener('click', (e) => {
        e.preventDefault();
        const videoSrc = video.getAttribute('data-video');
        lightboxVideo.src = videoSrc;
        lightbox.style.display = 'flex';
    });
});

// Close Lightbox
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxVideo.pause();
    lightboxVideo.src = ''; // Clear the video source
});

// Close Lightbox on Outside Click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxVideo.pause();
        lightboxVideo.src = ''; // Clear the video source
    }
});