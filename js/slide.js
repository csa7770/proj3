$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots : false,
        //autoplay : true,			// 자동 스크롤 사용 여부
        //autoplaySpeed : 5000
      });

      $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay : true,
        autoplaySpeed : 3000,
        pauseOnHover : true,
        swipe : true,
        swipeToSlide : true,

      });
})