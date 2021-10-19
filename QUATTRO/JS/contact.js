
//FORCONTACTSTART











$(document).ready(function(){
    $('#dropdown-a-contact').mouseenter(function(){
      $('.dp-content1').css('opacity','1');
      $('.dp-content1').css('top','2.1rem');
    });
  
    $('#dropdown-contact').mouseleave(function(){
        $('.dp-content1').css('opacity','0');
      $('.dp-content1').css('top','-15rem');
  
    });
  
    $('#dropdown-e-contact').mouseenter(function(){
      $('.dp-content2').css('opacity','1')
      $('.dp-content2').css('top','2.1rem');
  
  
    });
    $('#dropdown-2-contact').mouseleave(function(){
        $('.dp-content2').css('opacity','0');
      $('.dp-content2').css('top','-15rem');
  
    }); 
  
  });
  
  
  
  
  
  
  
  
  
  
  
  $(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 140){
      $('#header-contact').css('background-color','rgb(0, 0, 0, 0.5)');
      $('#header-contact').css('margin-top','-15px');
    }
    else{
      $('#header-contact').css('background-color','transparent');
      $('#header-contact').css('margin-top','0px');
    }
  });
  });
  
  
  
  
  $(document).ready(function(){
    $('.search').click(function(){
        $('#phone-header-contact').css('display','none');
        $('#phone-head-contact').css('display','none');
        $('#header-contact').css('display','none');
        $('.search-panel').css('display','block');
    });
  });
  
  
  
  
  
  
  
  
  
  
  function openNav() {
    document.getElementById("mySidenav-contact").style.width = "80%";
  }
  function closeNav() {
    document.getElementById("mySidenav-contact").style.width = "0";
  }
  
  
  
  
  $(document).ready(function(){
      $('#home-down-contact').click(function(){
          
          var hs = document.getElementById('hs-contact');
  
          if(hs.style.display == "block"){
              hs.style.display = 'none';
          }
          else{
              hs.style.display = "block"
          }
  
      });
  });
  
  $(document).ready(function(){
      $('#elements-down-contact').click(function(){
          var es = document.getElementById('es-contact');
          if(es.style.display == "block"){
              es.style.display = 'none';
          }
          else{
              es.style.display = "block"
          }
  
      });
  });
  
  
  $(document).ready(function(){
      $('#bars-contact').click(function(){
          $('#bars-contact').css('display','none');
          $('#arrow-contact').css('display','block');
      });
      $('#arrow-contact').click(function(){
        $('#bars-contact').css('display','block');
        $('#arrow-contact').css('display','none');
    });
  });
  
  
  
  
  
  
  
  
    
  