window.onload = function() {
  const expItem1 = document.querySelector('.expertise__info-item1');
  const expItem2 = document.querySelector('.expertise__info-item2');
  const expItem3 = document.querySelector('.expertise__info-item3');
  const span1 = document.querySelector('#expertise__span1').innerHTML;
  const span2 = document.querySelector('#expertise__span2').innerHTML;
  const span3 = document.querySelector('#expertise__span3').innerHTML; 
  expItem1.style.width = span1;
  expItem2.style.width = span2;
  expItem3.style.width = span3;
}

$(function(){
  var mixer = mixitup('.portfolio__content',{
    animation: {
      duration: 300
    }
  });
  $('.slider-blog__inner').slick({
    dots: true,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev arrow"><img class="slider-prev" src="images/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next arrow"><img class="slider-next" src="images/next.svg"></button>',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          arrows: false
        }
      },
    ]
  });
});

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
let x = false;
menuBtn.onclick = () => {
  if (x == false){
    menu.style.height = '334px';
    x = true;
  }
  else{
    menu.style.height = '0';
    x = false;
  }
};

const links = document.getElementsByClassName('menu__link');
for (let i of links){
  i.onclick = function(){
    if (window.innerWidth <= 768){
      menu.style.height = '0';
      x = false;
    }
  }
}
