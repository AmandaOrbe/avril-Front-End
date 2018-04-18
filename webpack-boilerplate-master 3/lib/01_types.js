
const toggleImages = (event) => {
  console.log(event);
  console.log(event.target);
  event.target.classList.toggle("small");
};

const bindClickImages = (image) => {
  image.addEventListener("click", toggleImages);
};

document.addEventListener("DOMContentLoaded", () =>{
  const images = document.querySelectorAll("img");
  images.forEach(bindClickImages);
});

function addImage() {
  const newImage = document.createElement("img");
  newImage.src = "https://kitt.lewagon.com/placeholder/users/ssaunier";
  document.body.append(newImage);
  bindClickImages(newImage);

}

setTimeout(addImage, 1000);
