document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".carousel img");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});
