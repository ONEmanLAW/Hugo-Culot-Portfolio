//////////////////////////////////////
// Header ( Active hamburger menu ) //
//////////////////////////////////////

let menuIcon = document.querySelector('.menu-icon');
let navList = document.querySelector('.navList')
menuIcon.addEventListener("click",()=>{
  menuIcon.classList.toggle('active');
  navList.classList.toggle('active');
  document.body.classList.toggle('open');
});

navList.addEventListener('click',()=>{
  navList.classList.remove('active');
  menuIcon.classList.remove('active');
  document.body.classList.remove('open');
})


/////////////////////////////////////
// Switch between (about buttons) //
/////////////////////////////////////

const buttons = document.querySelectorAll(".about-btn button");
const  contents = document.querySelectorAll(".content");

buttons.forEach((button , index) => {
  button.addEventListener("click", ()  => {
    contents.forEach(content => content.style.display = "none");
    contents[index].style.display = "block";
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});


/////////////////////////////////////
// Portfolio fillter               //
/////////////////////////////////////

var mixer = mixitup('.portfolio-gallery', {
  selectors: {
    target: '.portfolio-box'
  },
  animation: {
    duration: 800
  }
});


/////////////////////////////////////
// Portfolio fillter               //
/////////////////////////////////////

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll",()=>{
  if(!skillsPlayed)
  skillsCounter();
})


const hasReached = (el) => {
  let topPosition = el.getBoundingClientRect().top;
  if(window.innerHeight >= topPosition + el.offsetHeight)return true;
  return false;
}

const updateCount = (num,maxNum) => {
    let currentNum = +num.innerText;
    
    if(currentNum < maxNum){
      num.innerText = currentNum + 1;
      setTimeout(()=>{
        updateCount(num,maxNum)
      },12)
    }
}

let skillsPlayed = false;

const skillsCounter = () => {
    if(!hasReached(first_skill))return;
    skillsPlayed = true;
    sk_counters.forEach((counter,i)=>{
      let target = +counter.dataset.target;
      let strokeValue = 465 - 465 * (target / 100);

      progress_bars[i].style.setProperty("--target",strokeValue);

      setTimeout(()=>{
        updateCount(counter,target);
      },400)
    });

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}

/////////////////////////////////////
// Footer pour remonter            //
/////////////////////////////////////

let calcScrollValue = ()=>{
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;

  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100)/calcHeight);
  
  if(pos > 100){
    scrollProgress.style.display = "grid";
  }else{
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click",()=>{
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#f4d644 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


/////////////////////////////////////
// Active Menu                     //
/////////////////////////////////////

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('section');

const activeMenu = () => {
  let len = section.length;
  while(--len && window.scrollY + 97 < section[len].offsetTop){}
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);


/////////////////////////////////////
// Scroll Reveal                   //
/////////////////////////////////////

ScrollReveal({ 
  distance:"100px",
  duration:2500,
  delay:200,
  reset: true
});


ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', { origin: "top" });
ScrollReveal().reveal('.about-img,.filter-button,.contact-info', { origin: "left" });
ScrollReveal().reveal('.about-content,.skills', { origin: "right" });
ScrollReveal().reveal('.allServices,.portfolio-gallery,.blog-box,footer,.img-hero', { origin: "bottom" });