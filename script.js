const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


//THEME ....
const theme = document.querySelector('#theme');
const thememodal = document.querySelector('.costomize-theme');
const fontSizes = document.querySelectorAll('.choose-size');
const colorPalette = document.querySelectorAll('.choose-color span')
var root = document.querySelector(':root');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

//CONTACT US PAGE




const swiper = new Swiper('.swiper-container', {

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  autoplay:
  {
    delay: 2000,
  },
  loop: true,

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    850: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    1900: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
});


//=======END=====
// =====DOCUMENTATION=====
var SWIPER = new Swiper(".slide_content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      400: {
          slidesPerView: 1,
      },
      850: {
          slidesPerView: 2,
      },
      1900: {
          slidesPerView: 3,
      },
  },
});


toggle.addEventListener("click" , () =>{
  sidebar.classList.toggle("close");
  })
  
  searchBtn.addEventListener("click" , () =>{
  sidebar.classList.remove("close");
  })
  

//   THEME COSTOMIZATION

//open modal
const openThemeModal = () => {
  thememodal.style.display = 'grid';
}
//close modal
const closeThemeModal = (e) => {
if(e.target.classList.contains('costomize-theme')){
  thememodal.style.display = 'none';
   }
}
theme.addEventListener('click', openThemeModal);
thememodal.addEventListener('click', closeThemeModal);


//=======FONT SIZE======

fontSizes.forEach(size => {
  let fontSize;

size.addEventListener('click', () => {

  if(size.classList.contain('font-size-1')){
    fontSize = '10px';
  } else if(size.classList.contains('font-size-2')){
    fontSize = '13px';
  } else if(size.classList.contains('font-size-3')){
    fontSize = '16px';
  } else if(size.classList.contains('font-size-4')){
    fontSize = '19px';
  } else if(size.classList.contains('font-size-5')){
    fontSize = '25px';
  }

  //change font size of the root html element
  document.querySelectorAll('html').style.fontSize = fontSize;

})

})
//remove acive class from color
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
}

//......COLOR PALETTE.......
colorPalette.forEach(color => {
  color.addEventListener('click',() => {
    let primaryhue;
    changeActiveColorClass();
    if(color.classList.contains('color-1')){
      primaryhue = 252; 
    } else if(color.classList.contains('color-2')){
      primaryhue = 52;
    } else if(color.classList.contains('color-3')){
      primaryhue = 352;
    } else if(color.classList.contains('color-4')){
      primaryhue = 152;
    } else if(color.classList.contains('color-5')){
      primaryhue = 202;
    }
    color.classList.add('active');
    root.style.setProperty('--primary-color-hue', primaryhue);
  })
})



//THEME BACKGROUND VALUES......
let lightcolorlightness;
let whitecolorlightness;
let darkcolorlightness;

//change background color
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightcolorlightness);
  root.style.setProperty('--white-color-lightness', whitecolorlightness);
  root.style.setProperty('--dark-color-lightness', darkcolorlightness);
}

Bg1.addEventListener('click', () => {
  darkcolorlightness = '17%';
  whitecolorlightness = '100%';
  lightcolorlightness = '70%';
   
  //add active class
  Bg1.classList.add('active');
  //remove active class from others
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  //REMOVE COSTOMIZED CHANGE FROM LOCAL STORAGE
 changeBG();
});

Bg2.addEventListener('click', () => {
  darkcolorlightness = '95%';
  whitecolorlightness = '30%';
  lightcolorlightness = '15%';
   
  //add active class
  Bg2.classList.add('active');
  //remove active class from others
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBG();
});

Bg3.addEventListener('click', () => {
  darkcolorlightness = '95%';
  whitecolorlightness = '10%';
  lightcolorlightness = '0%';
   
  //add active class
  Bg3.classList.add('active');
  //remove active class from others
  Bg2.classList.remove('active');
  Bg1.classList.remove('active');
  changeBG();
});