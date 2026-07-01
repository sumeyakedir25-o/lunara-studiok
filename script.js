const gallery = document.getElementById("gallery");
const openGallery = document.getElementById("openGallery");
const closeGallery = document.querySelector(".close-gallery");

const galleryImage = document.getElementById("gallery-image");
const galleryTitle = document.getElementById("gallery-title");
const galleryDescription = document.getElementById("gallery-description");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const dotsContainer = document.querySelector(".gallery-dots");

const projects = [
{
title:"Modern Villa",
description:"Luxury residential architecture with timeless elegance.",
image:"https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80"
},
{
title:"Urban Tower",
description:"High-rise commercial building in a modern city.",
image:"https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80"
},
{
title:"Interior Concept",
description:"Elegant interior spaces with natural lighting.",
image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
},
{
title:"Luxury House",
description:"Minimalist architecture designed for comfort.",
image:"https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
},
{
title:"Lake House",
description:"Modern home overlooking peaceful water.",
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
},
{
title:"Mountain Cabin",
description:"Natural design blending with the landscape.",
image:"https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80"
},
{
title:"Luxury Living",
description:"Premium architecture for modern families.",
image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
},
{
title:"Glass House",
description:"Open spaces with panoramic views.",
image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
},
{
title:"Contemporary Home",
description:"Clean lines and elegant design.",
image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80"
},
{
title:"Dream Residence",
description:"Luxury architecture crafted for the future.",
image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
}
];

let current = 0;

function showProject(index){

galleryImage.src = projects[index].image;

galleryTitle.textContent = projects[index].title;

galleryDescription.textContent = projects[index].description;

document.querySelectorAll(".gallery-dots span").forEach(dot=>{
dot.classList.remove("active");
});

document.querySelectorAll(".gallery-dots span")[index].classList.add("active");

}

projects.forEach((project,index)=>{

const dot=document.createElement("span");

dot.addEventListener("click",()=>{

current=index;

showProject(current);

});

dotsContainer.appendChild(dot);

});

showProject(current);

openGallery.addEventListener("click",()=>{

gallery.classList.add("active");

});

closeGallery.addEventListener("click",()=>{

gallery.classList.remove("active");

});

nextBtn.addEventListener("click",()=>{

current++;

if(current>=projects.length){

current=0;

}

showProject(current);

});

prevBtn.addEventListener("click",()=>{

current--;

if(current<0){

current=projects.length-1;

}

showProject(current);

});

window.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

if(e.key==="Escape"){

gallery.classList.remove("active");

}
});
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});
window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});
