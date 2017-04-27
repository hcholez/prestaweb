$(document).ready(function() {

  $(window).scroll(function(){

    //burger menu
    $(".menu-mobile .burger-menu").click(function() {
      if ($(this).hasClass('active')) {
        $('.link-menu').hide();
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
        $('.link-menu').show();
      }

    });

    var sticky =        $('.menu'),
        stickymobile = $('.menu-mobile',)
        scroll =        $(window).scrollTop();

    if (scroll >= 10) {
      sticky.addClass('fixed block-shadow');
      stickymobile.addClass('fixed block-shadow');
    }
    else {
      sticky.removeClass('fixed block-shadow');
      stickymobile.removeClass('fixed block-shadow');
    }

    var services =      $('#services').offset().top;
    var competences =   $('#competences').offset().top;
    var equipe =        $('#equipe').offset().top;
    var contact =       $('#contact').offset().top;

    if (scroll >= services && scroll < competences) {
      $('.menu li').removeClass('active');
      $('.menu li#active-services').addClass('active');

    } else if (scroll >= competences && scroll < equipe) {
      $('.menu li').removeClass('active');
      $('.menu li#active-competences').addClass('active');

    } else if (scroll >= equipe && scroll < contact) {
      $('.menu li').removeClass('active');
      $('.menu li#active-equipe').addClass('active');

    } else if (scroll >= contact) {
        $('.menu li').removeClass('active');
        $('.menu li#active-contact').addClass('active');

    } else {

        $('.menu li').removeClass('active');
        $('.menu li#active-services').addClass('active');
    }
  });


});
