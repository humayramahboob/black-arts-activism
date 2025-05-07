// Array of images, artists, and art piece names
const imagesWithDetails = [
  {
    src: "/slideshow/image1.png",
    artist: "David Drake",
    artPiece: "Storage Jar",
  },
  {
    src: "/slideshow/image2.png",
    artist: "Sylvia Snowden",
    artPiece: "Malik, Farewell ‘Til We Meet Again XVII",
  },
  {
    src: "/slideshow/image3.png",
    artist: "Charles Ethan Porter",
    artPiece: "Still Life with Apples",
  },
  {
    src: "/slideshow/image4.png",
    artist: "Jacob Lawrence",
    artPiece: "Street to Mbari",
  },
  {
    src: "/slideshow/image5.png",
    artist: "Margaret Burrough",
    artPiece: "Sleeping Boy",
  },
  {
    src: "/slideshow/image6.png",
    artist: "Chakaia Booker",
    artPiece: "Egress",
  },
  {
    src: "/slideshow/image7.png",
    artist: "Betye Saar",
    artPiece: "Twilight Awakening",
  },
  {
    src: "/slideshow/image8.png",
    artist: "Lois Mailou Jones",
    artPiece: "The Green Door",
  },
  {
    src: "/slideshow/image9.png",
    artist: "David C. Driskell",
    artPiece: "Behold thy Son",
  },
  {
    src: "/slideshow/image10.png",
    artist: "Charles Henry Alston",
    artPiece: "Walking",
  },
  {
    src: "/slideshow/image11.png",
    artist: "Faith Ringgold",
    artPiece: "American People #20 Die",
  },
  {
    src: "/slideshow/image12.png",
    artist: "David Hammons",
    artPiece: "The Door",
  },
  {
    src: "/slideshow/image13.png",
    artist: "Aaron Douglas",
    artPiece: "Into Bondage",
  },
];

// Shuffle the images, artists, and art pieces
for (let i = imagesWithDetails.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [imagesWithDetails[i], imagesWithDetails[j]] = [
    imagesWithDetails[j],
    imagesWithDetails[i],
  ];
}

const wrapper = document.getElementById("slideshow-wrapper");
imagesWithDetails.forEach((item) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
      <img src="${item.src}" alt="Artwork" />
      <p class="art-piece-name">${item.artPiece}</p>
      <p class="artist-name">${item.artist}</p>
    `;
  wrapper.appendChild(slide);
});

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1200,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
