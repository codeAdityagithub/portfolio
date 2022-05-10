const links = document.querySelectorAll("#navbar a");
const info= document.querySelector(".info");
const html= document.querySelector(".html");

for(i=0;i<links.length; i++){
    links[i].addEventListener("click", ()=>{
        this.classList.add("active");
    })
}

console.log(info);