$("#owl-clients").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: true,
    loop: true,
    navText: ["<svg class='icone icon-arrow-left'><use xlink:href='#icon-arrow-left'></use></svg>", "<svg class='icone icon-arrow-right'><use xlink:href='#icon-arrow-right'></use></svg>"],
    responsive: {
        0: {
            items: 1
        },
        568: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});