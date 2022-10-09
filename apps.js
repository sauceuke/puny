
const slides = document.getElementsByClassName("slide");

const backtop = document.querySelector('.backtop');
backtop.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const leftbtn = document.querySelector('.l-btn');
const rightbtn = document.querySelector('.r-btn');
rightbtn.addEventListener("click", function(event){
    console.log("done");
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft += 1100;
    event.preventDefault();
});
leftbtn.addEventListener("click", function(event){
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft -= 1100;
    event.preventDefault();
});

const left1btna = document.querySelector('.btn-1a');
const right1btnb = document.querySelector('.btn-1b');
right1btna.addEventListener("click", function(event){
    console.log("done");
    const conent = document.querySelector('.product-slide-1');

    conent.scrollLeft += 1100;
    event.preventDefault();
});
lef1btnb.addEventListener("click", function(event){
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft -= 1100;
    event.preventDefault();
});

const right2btna = document.querySelector('.btn-2a');
const left2btnb = document.querySelector('.btn-2b');
right2btna.addEventListener("click", function(event) {
    console.log("done");
    const conent = document.querySelector('.product-slide-2');

    conent.scrollLeft += 1100;
    event.preventDefault();
});
left2btnb.addEventListener("click", function(event) {
    const conent = document.querySelector('.product-slide-2');

    conent.scrollLeft -= 1100;
    event.preventDefault();
});

const right3btna = document.querySelector('.btn-3a');
const left3btnb = document.querySelector('.btn-3b');
right3btna.addEventListener("click", function(event) {
    console.log("done");
    const conent = document.querySelector('.product-slide-3');

    conent.scrollLeft += 1100;
    event.preventDefault();
});

left3btnb.addEventListener("click", function(event) {
    const conent = document.querySelector('.product-slide-3');

    conent.scrollLeft -= 1100;
    event.preventDefault();
});

let flag=0;
function forward(num){
    if(flag>slides.length-1){
        flag=0;
        console.log('flag=0');
    }
    show(flag+=num);
}
function backward(num){
    if (flag<0) {
        flag=slides.length-1;
        console.log("'flag' is flag");
    }
    show(flag+=num);
}

function show(num){
    for (let y = 0; y < slides.length; y++) {
        slides[y].style.display = "none";
        console.log("done");
    }
    console.log(num);
    if(num>slides.length-1){
        num=0;
        console.log(num);
        slides[num].style.display="block";
    }
    else if(num<0){
        num=slides.length-1;
        console.log(num);
        slides[num].style.display="block";
    }
    else{
        slides[num].style.display="block";
    }
}

const sidebtn = document.querySelector(".second-1");
const hdnelmnt = document.querySelector(".hdn-elmnt");
const cross = document.querySelector(".fa-xmark");
const sidebar = document.querySelector(".sidebar");
const black = document.querySelector(".black");
const sign = document.querySelector(".ac");
const tri = document.querySelector(".hdn-sign");
const signin = document.querySelector(".hdn-sign");

sidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");

})

cross.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll");
})

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
})

