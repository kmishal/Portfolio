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
        autoScrolling: true,
        fitToSection: true,
        loopBottom: true,
        fadingEffect: true,
    });
    $.fn.fullpage.setAllowScrolling(true);

    // Write Cusotome Js from here ...
    

});