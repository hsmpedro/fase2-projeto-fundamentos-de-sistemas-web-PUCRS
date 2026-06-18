console.log("O site está carregado!");

var myCarousel = document.querySelector('#carouselExampleAutoplaying')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000, // tempo em ms
  ride: 'carousel'
})