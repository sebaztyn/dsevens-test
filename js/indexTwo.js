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



navList.addEventListener("mouseover", e=>{
  if(e.target.matches('a[data-input="home"]')){
    navImage.src = preload[0];
    e.target.classList.add("nav-color");
  }
  if(e.target.matches('a[data-input="about"]')){
        navImage.src = preload[1];
    e.target.classList.add("nav-color");
  }
  if(e.target.matches('a[data-input="services"]')){
     navImage.src = preload[2];
    e.target.classList.add("nav-color");
  }
  if(e.target.matches('a[data-input="studio"]')){
    navImage.src = preload[3];
    e.target.classList.add("nav-color");
  }
  if(e.target.matches('a[data-input="kaprint"]')){
    navImage.src = "../assets/kaprint-lady.jpg";
    e.target.classList.add("nav-color");
  }
  if(e.target.matches('a[data-input="contact"]')){
    navImage.src = preload[5];
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
      navImageContainer.style.display="block"
      console.log(navList.offsetLeft<= 2)
    }
    if(entry.isIntersecting && navList.offsetLeft<= 1 && !checkBox.checked){
      navImageContainer.style.display="none"
      console.log("We are leaving")
    }
  });
}

const navObserve = new IntersectionObserver(checkNavigation, {threshold: 1.0})
navObserve.observe(navList)