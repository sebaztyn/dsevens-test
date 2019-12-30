const aboutNavigation = (entries)=>{
  console.log("WHAT IS HAPPENIGN")
  entries.forEach(entry => {
    if(entry.isIntersecting && entry.target.offsetLeft<=5){
      console.log(entry.target.offsetLeft)
      console.log("WHAT??!!!")
    }else{
      console.log("NOT WORKING!!!")
    }
  });
}


const aboutNavigationObserver = new IntersectionObserver(aboutNavigation, {threshold: 1})


const aboutNav = document.querySelector(".about-nav-menu")
aboutNavigationObserver.observe(aboutNav)