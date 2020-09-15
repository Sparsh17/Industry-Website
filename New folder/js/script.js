$(window).on('load', function () {
    $('#status').fadeOut('slow');
    $('#preloader').delay(350).fadeOut();
});


$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', ' <i class="fa fa-angle-right"></i>']

    });
});

/*
=====================================================================
                            Magnifier
=====================================================================
*/

$(function () {

    $("#work-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});


/*
=====================================================================
                            Feedback
=====================================================================
*/

$(function () {
    $("#feedback-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', ' <i class="fa fa-angle-right"></i>']

    });
});


/*
=====================================================================
                            Stats
=====================================================================
*/

$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000

    });

});


/*
=====================================================================
                            Google Map
=====================================================================
*/

//$(window).on('load', function () {
//    
//    var addressString = "Model Town, Ludhiana, Punjab ";
//    var myLatlng = {lat: 30.897141, lng: 75.818092};
//    
//    var map = new google.maps.Map(document.getElementById('map'), {
//        zoom: 11,
//        center: myLatlng
//    });
//    
//    var marker = new google.maps.Marker({
//        position: myLatlng, 
//        map: map
//    });
//    
//    var infowindow = new google.maps.InfoWindow({
//        content: addressString
//    });
//    
//    marker.addListener('click', function () {
//        infowindow.open(map, marker);
//    });
//    
//});

/*
=====================================================================
                            Navigation
=====================================================================
*/

$(function () {

    showHideNav();

    $(window).scroll(function () {

        showHideNav();

    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            $("nav").addClass("white-nav-top");

            //            $(".navbar-brand img").attr("src", "img/")dark

            $("#back-to-top").fadeIn();

        } else {

            $("nav").removeClass("white-nav-top");

            //               $(".navbar-brand img").attr("src", "img/")l


            $("#back-to-top").fadeOut();
        }




    }


});

//Smooth Scroling 

$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});

/*
=====================================================================
                        Animate
=====================================================================
*/

$(function () {

    new WOW().init();

});

$(window).on('load', function () {

    $("#home-heading1").addClass("animated fadeInDown");

    $("#home-heading2").addClass("animated fadeInLeft");

    $("#home-text").addClass("animated zoomIn");

    $("#home-btn").addClass("animated zoomIn");

    $("#arrow-down i").addClass("animated fadeInDown infinite");


});