var $menuList = $('.menu-list> ul> li');
$(document).ready(function() {
    // Full page js
    $('#fullpage').fullpage({
        sectionsColor: ['#272727', '#282632', '#272727', '#282632', '#272727', '#282632'],
        anchors: ['Home', 'About-Me', 'Skills', 'Work-History', 'Portfolio', 'Contact'],
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        navigationTooltips: ['Home', 'About-Me', 'Skills', 'Work-History', 'Portfolio', 'Contact'],
        css3: true,
        fitToSection: false,
        loopBottom: true,
        fadingEffect: true,
        responsiveWidth: 767,
        easingcss3: 'cubic-bezier(1.000, -0.440, 0.265, 1.385)',
        scrollingSpeed: 1200,
        v2compatible: true,
        scrollOverflow: true,
        touchSensitivity: 100
    });
    $.fn.fullpage.setAllowScrolling(true);

    // ===========Write Cusotome Js from here ... ===============
    // Navbar functionality
    // Select nav main element
        $('#button-nav').on('click touchStart', animateHamburger);
        // Menu List toggle popup
        $menuList.each(function () {
            $(this).on('click touchStart', function (e) {
                // console.log(e.target);
                $('#pop-nav').toggle('pop-active');
                $('.hamburger').removeClass('is-active');
            });
        });

    //Bar compeletion functionality
    // get all bar elements
    var $bars = $(".bar-completed");
    // fetch value of completion from data-width
    $bars.each(function(){
        $(this).css({
            "width": $(this).data("width")
        });
    });

});

// Hamburger Animation
function animateHamburger(){
   
    // nav hamburger animation
    // check if hamburger class has "is-active" class
    if ($('.hamburger').is('.is-active')) {
        // If consist of above class remove class
        $('.hamburger').removeClass('is-active');
    }
    else {
        //else remove class
        $('.hamburger').addClass('is-active');
    }
    //Delay pop animation
    // on click on that element a popup of  background color #272727, opacity 90% will open
    setTimeout( function(){
        $('#pop-nav').toggle('pop-active');  
    }, 250);
}


