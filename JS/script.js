document.addEventListener('DOMContentLoaded', () =>{
    const elementosCarousel = document.querySelectorAll('.carousel');
    Map.Carousel.init(elementosCarousel,{
        duration:160,
        dist:-80,
        shift:5,
        padding:5,
        numVisible:3,
        indicators: true,
        noWrap: false
    });
});