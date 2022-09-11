// auto type 
var typed = new Typed('.autoType', {
    strings: ['Tech', 'Web Development', 'Programming', 'DESIGNING'],
    typeSpeed: 110,
    backspeed: 2000,
    backDelay: 2000,
    loop: true
});

// aos 

AOS.init();


$(document).ready(function () {

    // sticky nav 
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
            $("#navheader").addClass("stickyNav");
        } else {
            $("#navheader").removeClass("stickyNav");
        }
    });

// slick slider 
    $('#allReviews').slick({
        autoplay: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 1000
    })
// faq drop down 
    $('.faq-qna').click(function () {
        let faqId = $(this).attr('data-faq')

        if ($(this).hasClass("faq-Show")) {
            $(this).removeClass('faq-Show')
            $('#faqIcon-' + faqId).addClass('fa-plus')
            $('#faqIcon-' + faqId).removeClass('fa-minus')
        } else {
            $(this).addClass('faq-Show')
            $('#faqIcon-' + faqId).addClass('fa-minus')
            $('#faqIcon-' + faqId).removeClass('fa-plus')
        }

        $('#faq-ans-' + faqId).toggle('faq-ans-show')
    })

})
