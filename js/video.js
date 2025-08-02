const preview = document.getElementById("videoPreview");
const modal = document.getElementById("videoModal");
const closeBtn = document.querySelector(".close-btn");
const video = document.getElementById("productVideo");

// On preview click, open modal and play video
preview.onclick = function () {
    modal.style.display = "block";
    video.play();
};

// On close button click
closeBtn.onclick = function () {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
};

// Close modal when clicked outside video
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
    }
};