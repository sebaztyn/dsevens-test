const navList = document.querySelector(".hamburger>ul")
const checkBox = document.querySelector(".hamburger>input")
const navObject = navList.getBoundingClientRect();
const navImage = document.querySelector("#nav-images")
const navImageContainer = document.querySelector(".hamburger>div")

const preload = new Array();


preload[0] = "../assets/d-organics-perlm-kernel-oil.jpg";
preload[1] = "../assets/onuk-ink-office-contact-location.jpg";
preload[2] = "../assets/mbre-event-for-the-roothub.jpg";
preload[3] = "../assets/glory-bobby-bassey.jpg";
preload[4] = "../assets/kaprint-lady.jpg";
preload[5] = "../assets/ibom-plaza-illustration.jpg";


const imageElement = str=>`<img src=${str} >`;
navList.addEventListener("mouseover", e=>{
  if(e.target.matches('a[data-input="home"]')){
    navImageContainer.innerHTML = imageElement(preload[0]);
    setTimeout(() =>navImageContainer.lastElementChild.setAttribute("class", "zoom-out"), 10);
    e.target.classList.add("nav-color");
  }
  if(e.target.matches('a[data-input="about"]')){
    navImageContainer.innerHTML = imageElement(preload[1]);
    setTimeout(() =>navImageContainer.lastElementChild.setAttribute("class", "zoom-out"),10);
    e.target.classList.add("nav-color");
  }
  if(e.target.matches('a[data-input="services"]')){
    navImageContainer.innerHTML = imageElement(preload[2]);
    setTimeout(() =>navImageContainer.lastElementChild.setAttribute("class", "zoom-out"),10);
    e.target.classList.add("nav-color");
  }
  if(e.target.matches('a[data-input="studio"]')){
    navImageContainer.innerHTML = imageElement(preload[3]);
    setTimeout(() =>navImageContainer.lastElementChild.setAttribute("class", "zoom-out"),10);
    e.target.classList.add("nav-color");
  }
  if(e.target.matches('a[data-input="kaprint"]')){
    navImageContainer.innerHTML = imageElement(preload[4]);
    setTimeout(() =>navImageContainer.lastElementChild.setAttribute("class", "zoom-out"),10);
    e.target.classList.add("nav-color");
  }
  if(e.target.matches('a[data-input="contact"]')){
    navImageContainer.innerHTML = imageElement(preload[5]);
    setTimeout(() =>navImageContainer.lastElementChild.setAttribute("class", "zoom-out"),10);
    e.target.classList.add("nav-color");
  }
})
navList.addEventListener("mouseout", e=>{
  if(e.target.matches('a[data-input="home"]')){
    e.target.classList.remove("nav-color");
  }
  if(e.target.matches('a[data-input="about"]')){
    e.target.classList.remove("nav-color");
  }
  if(e.target.matches('a[data-input="services"]')){
    e.target.classList.remove("nav-color");
  }
  if(e.target.matches('a[data-input="studio"]')){
    e.target.classList.remove("nav-color");
  }
  if(e.target.matches('a[data-input="kaprint"]')){
    e.target.classList.remove("nav-color");
  }
  if(e.target.matches('a[data-input="contact"]')){
    e.target.classList.remove("nav-color");
  }
})

// navList.addEventListener("animationend", event=>{
//   console.log('WORKED!!!!!!!')
// })
checkBox.addEventListener("click", event=>{
  if(checkBox.checked){
    navList.classList.remove("unchecked")
  }else{
    navList.classList.add("unchecked")
  }
})

const checkNavigation = (entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting && navList.offsetLeft<=1 && checkBox.checked){
      navImageContainer.style.display="block";
      navImageContainer.innerHTML = imageElement(preload[0]);
      setTimeout(() =>navImageContainer.lastElementChild.setAttribute("class", "zoom-out"), 10);
    document.querySelector(".hamburger>ul>li a").classList.add("nav-color");
    }
    if(entry.isIntersecting && navList.offsetLeft<= 1 && !checkBox.checked){
      navImageContainer.style.display="none"
    }
  });
}

const navObserve = new IntersectionObserver(checkNavigation, {threshold: 1.0})
navObserve.observe(navList)