

//forindexstart
AOS.init();




$(document).ready(function(){
    $('#dropdown-a').mouseenter(function(){
      $('.dp-content1').css('opacity','1');
      $('.dp-content1').css('top','2.1rem');
    });

    $('#dropdown').mouseleave(function(){
        $('.dp-content1').css('opacity','0');
      $('.dp-content1').css('top','-15rem');

    });

    $('#dropdown-e').mouseenter(function(){
      $('.dp-content2').css('opacity','1')
      $('.dp-content2').css('top','2.1rem');


    });
    $('#dropdown-2').mouseleave(function(){
        $('.dp-content2').css('opacity','0');
      $('.dp-content2').css('top','-15rem');

    }); 

});


$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 140){
      $('#header').css('background-color','rgb(0, 0, 0, 0.5)');
      $('#header').css('margin-top','-15px')
    }
    else{
      $('#header').css('background-color','transparent');
      $('#header').css('margin-top','0px')
    }
  })
})








$(document).ready(function(){
    $('.search').click(function(){
        $('#phone-header').css('display','none');
        $('#phone-head').css('display','none')
        $('#header').css('display','none');
        $('.search-panel').css('display','block');
    })
})

function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }




  $(document).ready(function(){
      $('#home-down').click(function(){
          
          var hs = document.getElementById('hs');

          if(hs.style.display == "block"){
              hs.style.display = 'none';
          }
          else{
              hs.style.display = "block"
          }

      });
  });
  
  $(document).ready(function(){
      $('#elements-down').click(function(){
          var es = document.getElementById('es');
          if(es.style.display == "block"){
              es.style.display = 'none';
          }
          else{
              es.style.display = "block"
          }

      });
  });


  $(document).ready(function(){
      $('#bars').click(function(){
          $('#bars').css('display','none');
          $('#arrow').css('display','block');
      });
      $('#arrow').click(function(){
        $('#bars').css('display','block');
        $('#arrow').css('display','none');
    });
  });
  

  $(document).ready(function(){
    $('.your-class').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:4200,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 0,
              slidesToScroll: 0
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  });

  $(document).ready(function(){
    $('#icon1').hover(function(){
      $('#ptext1').css('top','4.7rem')
      $('#ptext1').css('opacity','1')
      $('#ptext1').css('z-index','11')

    });
    $('.i-1').mouseleave(function(){
      $('#ptext1').css('top','1.5rem')
      $('#ptext1').css('opacity','0')
      $('#ptext1').css('z-index','1')

    });
    $('#icon2').hover(function(){
      $('#ptext2').css('top','-1.7rem');
      $('#ptext2').css('opacity','1')
      $('#ptext2').css('z-index','11')

    });
    $('.i-2').mouseleave(function(){
      $('#ptext2').css('top','-4.5rem');
      $('#ptext2').css('opacity','0')
    });
    $('#icon3').hover(function(){
      $('#ptext3').css('top','27px')
      $('#ptext3').css('opacity','1')
      $('#ptext3').css('z-index','11')
    })
    $('.i-3').mouseleave(function(){
      $('#ptext3').css('top','-20px')
      $('#ptext3').css('opacity','0')
      $('#ptext3').css('z-index','1')
    });

    $('#icon4').hover(function(){
      $('#ptext4').css('top','-4.3rem')
      $('#ptext4').css('opacity','1')
      $('#ptext4').css('z-index','11')

    })
    $('.i-4').mouseleave(function(){
      $('#ptext4').css('top','-7rem')
      $('#ptext4').css('opacity','0')
      $('#ptext4').css('z-index','1')

    })
    
  });


  $(document).ready(function(){
    $('.your2-class').slick({
       dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:3200,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  });


  $(document).ready(function(){
    $('.your3-class').slick({
       dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:3200,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  });





  function openTab(evt,tabName){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');

    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display='none';
        
    }

    tablinks = document.getElementsByClassName('tablinks');
    for(i=0;i<tablinks.length;i++){
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";


}


$(document).ready(function(){
  $('.your4-class').slick({
     dots: true,
      infinite: true,
      speed: 500,
      autoplay:true,
      autoplaySpeed:3200,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
});



//forindexend
















