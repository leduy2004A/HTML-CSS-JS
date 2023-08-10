const header = document.querySelector("#header");
const banner = document.querySelector(".banner");
const animation = document.querySelectorAll(".animation");
const animationFn = [...animation];
const content = document.querySelector("#content");
const move = document.querySelectorAll(".move");
const removeopa = document.querySelector(".removeopa");
console.log(animation);
setTimeout(()=>{removeopa.classList.add("slide-in-left")},100);
setTimeout(()=>{content.classList.add("slide-in-left")},200);
window.addEventListener("scroll",debounce(function()
{
  const scrollY=Math.floor(window.scrollY);
 console.log(scrollY);
 if(scrollY >=200)
 {
  
  header.classList.remove("removeopa");
  
  header.classList.add("addheight");
  if(scrollY >= 700)
 {
  animation.forEach(item => {
    item.classList.remove("animation");
    item.classList.add("slide-in-left");
  })
  if(scrollY >= 1700)
  {
    setTimeout(()=>{
      move.forEach(item => {
        item.classList.remove("move");
        item.classList.add("slide-in-left")
      })
    },100)
  }
 }
  
 }

 else{
  
  header.classList.add("removeopa");
  header.classList.remove("addheight");
  
 }
},50))
function debounce(func, wait, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;
	    
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
	
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
	
    if (callNow) func.apply(context, args);
  };
};