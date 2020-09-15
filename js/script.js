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

//$(function () {
//
//    $("a.smooth-scroll").click(function (event) {
//
//        event.preventDefault();
//
//        var section_id = $(this).attr("href");
//
//        $("html, body").animate({
//            scrollTop: $(section_id).offset().top - 64
//        }, 1250, "easeInOutExpo");
//
//    });
//
//});

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


/*
=====================================================================
                        Form
=====================================================================
*/


$(document).ready(function(){
    $('#submit-btn').click(function (event) {
        
        console.log('Clicked')
        
        var name = $('.name').val()
        var email = $('.email').val()
        var phone = $('.phone').val()
        var subject = $('.subject').val()
        var requirement = $('.requirement').val()
        
        if(name == ""){
            alert("Please fill the name field")
        }
        else if(name.length > 3) {
//            
        } else {
            event.preventDefault()
//            
            alert('Length of name should be greater than or equal to 3')
        }
        
        
        
        if(email == ""){
            alert("Please fill the email field")
        }
        
        else if(email.length > 5 && email.includes('@') && email.includes('.')) {
            
        } else {
            event.preventDefault()
            alert('Email is not valid')
            
        }
        
        
        if(phone == ""){
            alert("Please fill the mobile number field")
        }
        else if(isNaN(phone)){
            alert(" user must write digits only not characters")
        }
        else if(phone.length!=10){
            alert("Mobile Number must be 10 digits only")
        }
                
        else {
            
        }
        
        
        if(subject == ""){
            alert("Please fill the subject field")
        }
        else if(subject.length >= 2) {
            
        } else {
            event.preventDefault()
            alert('Length of subject should be greater than or equal to 2')
            
        }
        
        if(requirement == ""){
            alert("Please fill the requirement field")
        }
        else if(requirement.length >= 10) {
            
        } else {
            event.preventDefault()
            alert('Length of requirement should be greater than or equal to 10')
            
        }
        

        
    })
}) 



/*
=====================================================================
                            Mobile
=====================================================================
*/

$(function() {
    $("#mobile-nav-open-btn").click(function() {
        
        $("#mobile-nav").css("height", "100%");
        
    });
    
    $("#mobile-nav-close-btn, mobile-nav a").click(function() {
        $("#mobile-nav").css("height", "0%");
    });
});


















