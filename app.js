/* ===============================
   BRIDE VILLA SALON JAVASCRIPT
================================ */


/* ===============================
   MOBILE MENU
================================ */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menuToggle){

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

}


/* ===============================
   STICKY NAVBAR SHADOW
================================ */

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";

}else{

header.style.boxShadow = "none";

}

});


/* ===============================
   SMOOTH SCROLLING
================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior: 'smooth'

});

});

});


/* ===============================
   BOOKING FORM VALIDATION
================================ */

const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const email = document.getElementById("email").value.trim();
const service = document.getElementById("service").value;
const date = document.getElementById("date").value;
const time = document.getElementById("time").value;

if(name === "" || phone === "" || email === "" || service === "" || date === "" || time === ""){

alert("Please fill all required fields.");

return;

}

const phonePattern = /^[0-9]{10}$/;

if(!phonePattern.test(phone)){

alert("Please enter a valid 10-digit phone number.");

return;

}

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!emailPattern.test(email)){

alert("Please enter a valid email address.");

return;

}

alert("Appointment booked successfully! We will contact you soon.");

bookingForm.reset();

});

}


/* ===============================
   GALLERY SCROLL ANIMATION
================================ */

const galleryImages = document.querySelectorAll(".gallery-grid img");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

});


galleryImages.forEach(img => {

img.style.opacity = "0";
img.style.transform = "translateY(40px)";
img.style.transition = "all 0.6s ease";

observer.observe(img);

});
