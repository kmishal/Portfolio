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
        scrollingSpeed: 700,
        fitToSection: true,
        loopBottom: true,
        fadingEffect: true,
        scrollOverflow: true
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

});

// Hamburger Animation
function animateHamburger(){
    // on click on that element a popup of  background color #272727, opacity 90% will open
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
    setTimeout( function(){
        $('#pop-nav').toggle('pop-active');  
    }, 250);
}

