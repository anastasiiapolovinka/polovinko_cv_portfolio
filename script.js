import Carousel from "konas_carousel";

const carouselConfig = {
  carouselId: "carousel", // root elem of carousel
  listClass: ".projectList", // ul of carousel
  listItemClass: ".projectCard",
  visibleItemsCount: 3,
  arrowPrevClass: ".arrowPrev",
  arrowNextClass: ".arrowNext",
  indicatorClass: ".carouselIndicator",
  autoPlayInterval: 5,
  itemWidth: 394,
  itemGap: 20,
};
const carousel = new Carousel(carouselConfig);

carousel.init();
