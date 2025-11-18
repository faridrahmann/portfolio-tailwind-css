// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Unsplash API
const imgElement = document.getElementById("unsplash-img");

fetch(
  "https://api.unsplash.com/photos/random?query=programming&w=360&h=200&client_id=LZaYx5wFu01p4b-YFMo18uzJ0Yb4KQa8o2xaEUbTxE0"
)
  .then((response) => response.json())
  .then((data) => {
    imgElement.src = data.urls.regular; // URL gambar asli
    imgElement.alt = data.alt_description || "Unsplash photo";
  })
  .catch((error) => console.error(error));
