$(window).on("load",function(){
    $(".preloader").fadeOut("slow")
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        /*600:{
            items:3,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }*/
    }
})
