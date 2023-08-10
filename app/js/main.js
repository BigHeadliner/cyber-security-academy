$(function () {    
   
    const hamburger = document.getElementById('menu__btn')
    const headerMenu = document.getElementById('menu__list')
    const menuLinks = document.querySelectorAll('.menu__link') 
  
  
    hamburger.addEventListener('click', () => {
       headerMenu.classList.toggle('menu__list--active') 
         hamburger.classList.toggle('menu__btn--open') 
    })
  
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
      headerMenu.classList.remove('menu__list--active') 
        hamburger.classList.remove('menu__btn--open')
    })
    })  
     
    
 
    $('.faq__question-top').on('click', function (){  
        $(this).next('.faq__question-content').slideToggle();
        $(this).children('.faq__action-btn').toggleClass('faq__action-btn--rotate'); 
      })    
       
      $('.faq__question-content').hide();    
       
       
      $("#star").rateYo({ 
        "rating" : 5,
        starWidth: "24px",
        readOnly: true, 
        starSvg: '<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8209 0.894923C10.8886 0.737759 11.1114 0.737761 11.1791 0.894922L13.5241 6.34023C13.7217 6.79911 14.1542 7.11336 14.6517 7.1595L20.5552 7.70703C20.7255 7.72283 20.7944 7.93476 20.6658 8.04769L16.2117 11.9606C15.8363 12.2903 15.6711 12.7988 15.781 13.2862L17.0845 19.0699C17.1221 19.2368 16.9419 19.3678 16.7947 19.2805L11.6969 16.2535C11.2673 15.9984 10.7327 15.9984 10.3031 16.2535L5.20528 19.2805C5.05814 19.3678 4.87787 19.2368 4.91549 19.0699L6.21902 13.2862C6.32887 12.7988 6.16366 12.2903 5.78831 11.9606L1.33416 8.04769C1.2056 7.93476 1.27446 7.72283 1.44484 7.70703L7.34828 7.1595C7.84577 7.11336 8.2783 6.79911 8.47591 6.34023L10.8209 0.894923Z" fill="#0EAAA3" stroke="#282828" stroke-width="1.17"/></svg>' 
        
      }); 
       
      $(".menu a, .go-top").on("click", function (event) {
        //відміняєм стандартну обробку кліку по ссилці
      event.preventDefault();
  
        // забираєм індифікатор блоку з атрибутом href
      var id  = $(this).attr('href'),
  
        //дізнаємся висоту від початку сторінки до блоку на який зсилається якір
        top = $(id).offset().top;
      
        //анімуєм перехід на відстань - top за 1500мс
      $('body,html').animate({scrollTop: top}, 1500);
    });



      });
       
