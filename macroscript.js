// Get the modal
var modal = document.getElementById("imageModal");

// Get the modal image element
var modalImg = document.getElementById("modalImage");

// Get all images in the gallery
var images = document.getElementsByClassName("gallery-img");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// Loop through images and add click event to open modal
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// Close the modal when the user clicks on <span> (x)
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside the modal image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
  // burger is workin
});
