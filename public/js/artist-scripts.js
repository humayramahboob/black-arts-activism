// Initialize AOS animations
AOS.init();

// Initialize Masonry grid layout after the page is loaded
window.addEventListener('load', function() {
  var grid = document.querySelector('.masonry-grid');
  new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: 200,
    percentPosition: true,
    gutter: 10
  });
});