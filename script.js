let logo = document.querySelector(".nav .logo ")
console.log(logo);

logo.addEventListener("mouseenter",function(){
   logo.style.border = '2px solid black'
    logo.style.cursor = 'pointer';
})



logo.addEventListener("mouseleave",function(){
    logo.style.border = '2px solid transparent'
   
    logo.style.cursor = 'none';

 })


 let nav = document.querySelectorAll(".nav-part2 li a")

//  console.log(nav);

 nav.forEach(function(elem){

elem.addEventListener("mouseenter",function(){
    elem.style.textDecoration =  'underline';
})

elem.addEventListener("mouseleave",function(){
    elem.style.textDecoration =  'none';
})
 })


let input = document.querySelector(".nav-part3 input")
console.log(input);

input.addEventListener("mousemove",function(){
    input.style.border = '2px solid rgb(18,155,155)'
})

input.addEventListener("mouseleave",function(){
    input.style.border = '2px solid black'
})

let button = document.querySelector(".nav-part3 button")

button.addEventListener("mouseenter",function(){
    button.style.border = '2px solid black'
    button.style.backgroundColor = 'white'
    button.style.color = 'black'
    button.style.boxShadow =  '5px 5px 10px #000';
}
)

button.addEventListener("mouseleave",function(){
    button.style.border = '2px solid transparent'
    button.style.backgroundColor = 'rgb(18,155,155)'
    button.style.color = 'white'
    button.style.boxShadow =  'none';


})

let button2 = document.querySelector(".mainright button")

button2.addEventListener("mouseenter",function(){
    button2.style.border = '2px solid black'
    button2.style.backgroundColor = 'white'
    button2.style.color = 'black'
    button2.style.boxShadow =  '5px 5px 10px #000';

})

button2.addEventListener("mouseleave",function(){
    button2.style.border = '2px solid transparent'
    button2.style.backgroundColor = 'rgb(18,155,155)'
    button2.style.color = 'white'
    button2.style.boxShadow =  'none';

})

let image = document.querySelector(".mainright img")
console.log(image);

image.addEventListener("mouseenter",function(){
    image.style.border  = '2px solid black '
})

image.addEventListener("mouseleave",function(){
    image.style.border  = 'none '
})


let page1 = document.querySelector(".page1")
let cursor = document.querySelector(".cursor")

page1.addEventListener("mousemove",function(dets){
  cursor.style.left = dets.x+'px'  
  cursor.style.top = dets.y+'px'  


})


// page2 

let head = document.querySelector(".head")

let h1 = document.querySelector(".head h1")
head.style.borderTop = '3px solid white';


head.addEventListener("mouseenter",function(){
    head.style.backgroundColor = 'black'
    h1.style.color = 'black'
    h1.style.WebkitTextStroke = '2px solid white'
})


head.addEventListener("mouseleave",function(){
    head.style.backgroundColor = 'white'
    h1.style.color = 'black'
    h1.style.WebkitTextStroke = '2px white';

})

h1.addEventListener("mouseenter",function(){
    h1.style.color = 'white'
    h1.style.cursor = 'pointer'
})

h1.addEventListener("mouseleave",function(){
    h1.style.color = 'transparent'
    h1.style.cursor = 'none'

})


let page3Card = document.querySelector(".page2 .card")
console.log(page3Card);



const image1 = document.querySelector(" .card #image")
console.log(image1);

let head2 = document.querySelector(".page2 .card h1")

let para = document.querySelector(".page2 .card p")

let button3 = document.querySelector(".page2 .card button")

// div.appendChild.page2Card)


page3Card.addEventListener("mouseenter",function(){
    image1.style.opacity = 0
    head2.style.display = 'block'
    para.style.display = 'block'
    button3.style.display = 'block'
    page3Card.style.boxShadow = 'black 0px 14px 28px, yellow 0px 10px 10px';
    page3Card.style.cursor = 'pointer'
    page3Card.style.scale = 1.1
})

page3Card.addEventListener("mouseleave",function(){
    image1.style.opacity = 1
    head2.style.display = 'none'
    para.style.display = 'none'
    button3.style.display = 'none'
    page3Card.style.cursor = 'none'
    page3Card.style.scale = 1

    page3Card.style.boxShadow = 'none';


})

button3.addEventListener("mouseenter",function(){
    button3.style.backgroundColor = 'black'
    button3.style.color = 'white'
})

button3.addEventListener("mouseleave",function(){
    button3.style.backgroundColor = 'white'
    button3.style.color = 'black'
})

//    Animation 


let tl = gsap.timeline()
tl .from(".logo ,.nav-part2 li, .nav-part3 ",{
    y:-80,
    opacity:0,
    duration:0.8,
    stagger:0.3,
})

tl.from(".mainleft h1, .mainleft h3" ,{
    x:-100,
    opacity:0,
    stagger:1,
    duration:0.6

})

tl.from(".mainright img ",{
    opacity:0,
    duration:0.5,
 scale:2,
 rotation :180
})



tl.from(".down",{
    y:30,
    duration:0.5,
    repeat:-1,
    yoyo:true,
    opacity:0
})

// Scrolltrigger next page

gsap .from(".page2 .card",{
    y:100,
    opacity:0,
    duration:0.8,
    stagger:0.3,
    
    scrollTrigger:{
        trigger:".page2 ",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        // markers:"transparent"

    }
})