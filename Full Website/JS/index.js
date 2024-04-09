// Image zoom in and out
document.querySelectorAll('.zoomable').forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.12)'; // Zoom in
        image.style.transition = 'transform 0.5s ease';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)'; // Zoom out
    });
});

/// Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Open popup form
function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

// Close popup form
function closePopup() {
    document.getElementById("popupForm").style.display = "none";
}

// Attach the openForm function to the "Contact Us" button
document.getElementById("openFormButton").addEventListener("click", openForm);
