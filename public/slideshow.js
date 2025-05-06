// Array of images, artists, and art piece names
const imagesWithDetails = [
    { src: '/slideshow/image1.png', artist: 'David Drake', artPiece: 'Storage Jar' },
    { src: '/slideshow/image2.png', artist: 'Sylvia Snowden', artPiece: 'Malik, Farewell ‘Til We Meet Again XVII' },
    { src: '/slideshow/image3.png', artist: 'Charles Ethan Porter', artPiece: 'Still Life with Apples' },
    { src: '/slideshow/image4.png', artist: 'Jacob Lawrence', artPiece: 'Street to Mbari' },
    { src: '/slideshow/image5.png', artist: 'Margaret Burrough', artPiece: 'Sleeping Boy' },
    
    { src: '/slideshow/image6.png', artist: 'Charles Ethan Porter', artPiece: 'Still Life with Apples' },
    { src: '/slideshow/image7.png', artist: 'David Drake', artPiece: 'Storage Jar' },
    { src: '/slideshow/image8.png', artist: 'Sylvia Snowden', artPiece: 'Malik, Farewell ‘Til We Meet Again XVII' },
    { src: '/slideshow/image9.png', artist: 'Charles Ethan Porter', artPiece: 'Still Life with Apples' },
    { src: '/slideshow/image10.png', artist: 'David Drake', artPiece: 'Storage Jar' },
    { src: '/slideshow/image11.png', artist: 'Sylvia Snowden', artPiece: 'Malik, Farewell ‘Til We Meet Again XVII' },
    { src: '/slideshow/image12.png', artist: 'Charles Ethan Porter', artPiece: 'Still Life with Apples' },
    { src: '/slideshow/image13.png', artist: 'David Drake', artPiece: 'Storage Jar' },
    { src: '/slideshow/image14.png', artist: 'Sylvia Snowden', artPiece: 'Malik, Farewell ‘Til We Meet Again XVII' },
    { src: '/slideshow/image15.png', artist: 'Charles Ethan Porter', artPiece: 'Still Life with Apples' },
    { src: '/slideshow/image16.png', artist: 'David Drake', artPiece: 'Storage Jar' },
    { src: '/slideshow/image17.png', artist: 'Sylvia Snowden', artPiece: 'Malik, Farewell ‘Til We Meet Again XVII' },
    { src: '/slideshow/image18.png', artist: 'Charles Ethan Porter', artPiece: 'Still Life with Apples' },
    { src: '/slideshow/image19.png', artist: 'David Drake', artPiece: 'Storage Jar' },
    { src: '/slideshow/image20.png', artist: 'Sylvia Snowden', artPiece: 'Malik, Farewell ‘Til We Meet Again XVII' },
  ];
  
  // Shuffle the images, artists, and art pieces
  for (let i = imagesWithDetails.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imagesWithDetails[i], imagesWithDetails[j]] = [imagesWithDetails[j], imagesWithDetails[i]];
  }
  
  const wrapper = document.getElementById('slideshow-wrapper');
  imagesWithDetails.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <img src="${item.src}" alt="Artwork" />
      <p class="art-piece-name">${item.artPiece}</p>
      <p class="artist-name">${item.artist}</p>
    `;
    wrapper.appendChild(slide);
  });
  
  const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  