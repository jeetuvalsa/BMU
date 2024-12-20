function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco()
function timeline(){
    var tl = gsap.timeline();

tl.from(".line h1,.line span", {
    y:"100%",
    stagger:0.3,
    duration:0.6,
    delay:0.3
});

tl.from("#line1-part1",{
    y:"100%",
    opacity:0,
    onStart: function(){
        var hundred = document.querySelector("#line1-part1 h5")
    var count = 0
setInterval(()=>{
    
    if(count < 100){
        count++;
        hundred.innerHTML = count
    }
    else{
        hundred.innerHTML  = count
    }
},40)
    }
})
tl.from(".line span",{
    animationName:"now",
    opacity:1,
    duration:2.9
    // duration:0
})
tl.to("#loader",{
    y:"-100%",
    opacity:1,
    duration:0.7,
    display:"none"
})
tl.from("#details,#nav,#career,#socials",{
    y:"-200%",
    duration:1,
    delay:0.1,
    opacity:0
})
tl.from("#hero,#page2,#page3",{
    opacity:0,
})
}
timeline()

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}
swiper()
       
function logoanimation(){
    var circle = document.querySelector("#circle")
    var video = document.querySelector("video")
    var image = document.querySelector("#circle img")
circle.addEventListener("click",(event)=>{
    image.style.display = "none"
    video.play();
    circle.classList.add("extended")
    event.stopPropagation();
})
document.body.addEventListener("click",()=>{
    circle.classList.remove("extended")
    image.style.display = "inline"
    video.load()
})

}
logoanimation()


function page3animation(){
    var circulars = document.querySelectorAll(".circular")
    var upperbox = document.querySelector("#upperbox")
    
    circulars.forEach((e)=>{
        e.addEventListener("mouseenter",()=>{
            upperbox.style.display = "block"
        })
        e.addEventListener("mouseleave",()=>{
            upperbox.style.display = "none"
        })
    })
    
    document.body.addEventListener("mousemove",(dets)=>{
        gsap.to("#upperbox",{
            left:dets.x,
            top:dets.y
        })
    })
    var circulars = document.querySelectorAll(".circular")
    // console.log(circulars);
    circulars.forEach((e)=>{
        e.addEventListener("mouseenter",()=>{
            var image = e.getAttribute("data-image");
        upperbox.style.backgroundImage = `url(${image})`
        })
    })
}
page3animation()

        

function horizontal(){
    gsap.to("#page5-content", {
        // transform:"translate(-67.5%)",
        transform:"translate(-124vw)",
        scrollTrigger:{
            trigger:"#page5",
            // scroller:"body",
            scroller:"#main",
            // markers:true,
            start:"top 0%",
            end:"top -100%",
            pin:true,
            scrub:2
        }
    });
}
horizontal()
function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.visibility = "visible"
}

function hidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.visibility = "hidden"
}



