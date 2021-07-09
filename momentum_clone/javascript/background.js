const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"]
const chosenImage = images[parseInt(Math.random()*images.length)];
const bgImage = document.createElement("img");

bgImage.src = `assets/${chosenImage}`;
document.body.appendChild(bgImage);
bgImage.classList.add("background_image");
