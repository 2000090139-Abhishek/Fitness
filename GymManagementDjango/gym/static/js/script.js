import 'https://code.jquery.com/jquery-3.6.0.min.js';
jQuery.noConflict();
jQuery(document).ready(function($) {
    $('.btn').click(function(){
        $('.nav-links').slideToggle(2000);
        // Toggle button class for effect
        $('.btn').toggleClass('change');
    });

    // Change navigation background on scroll
    $(window).scroll(function(){
        let position = $(window).scrollTop();
        if (position >= 100){
            $('nav, .nav-container').addClass('navBackground');
        } else {
            $('nav, .nav-container').removeClass('navBackground');
        }
    });
});
