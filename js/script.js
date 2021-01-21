$(function(){
    function fullBg(obj) {
        $(obj).each(function(){
            $this = $(this);
            var $img = $this.find('img').first();
            var $src = $img.attr('src');
            $this.css('background', 'url('+ $src + ') center/cover no-repeat');
            $img.hide();
        });
    };
    fullBg('.js-fullbg');
    $('.lst-hobbies').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        arrows: true,
        
    });
    wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            resetAnimation: false,
        }
      )
      wow.init();
      $('.lst-language li').click(function(){
          $(this).addClass('is-active').siblings().removeClass('is-active');
      });
});