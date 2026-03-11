window.addEventListener("scroll",function(){

const header=document.querySelector(".header");

if(window.scrollY>50){

header.style.boxShadow="0 4px 15px rgba(0,0,0,0.1)";

}else{

header.style.boxShadow="none";

}

});
