const hamburger =  document.querySelector(".hamburger");
const content = document.querySelector(".links");

const links = document.querySelectorAll(".links li");

hamburger.addEventListener("click",()=>{
    content.classList.toggle("open");

    links.forEach(link=>{
        link.classList.toggle("fade");
    })
})
