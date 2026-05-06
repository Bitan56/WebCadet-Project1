navBar = document.querySelector("#navbar");
banner = document.querySelector("#banner");
mainBody = document.querySelector("#main-body");
aboutImg = document.querySelector("#about-img");
aboutText = document.querySelector("#about-text");
menuBackdrop = document.querySelector("#menu-backdrop");
menuBox = document.querySelector("#menu-box");
menuCross = document.querySelector("#menu-cross");
menuText = document.querySelector("#menu-box ul");
menuButton = document.querySelector("#menu-button");

tl = gsap.timeline()

gsap.from(navBar, {
    scale: 0,
    delay: 1,
    duration: 2,
})

gsap.from(banner, {
    opacity: 0,
    delay: 0,
    duration: 2,
})

gsap.from(mainBody, {
    opacity: 0,
    scale:0,
    delay: 0,
    scrollTrigger:{
        trigger:mainBody,
        scroller:"body",
        start:"top 230%",
        end:"top 10%",
        scrub:4
    }
})

gsap.from("#about #about-img img",{
    scale:0,
    opacity:0,
    scrollTrigger:{
        trigger:"#about #about-img img",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:4
    }
})

tl.to(menuBackdrop,{
    top:0,
    display:"block",
    delay:0,
    duration:0.3
})

tl.from(menuBox,{
    opacity:0,
    height:0,
    delay:0,
    duration:0.2
})

tl.from(menuText,{
    opacity:0,
    scale:0,
    delay:0,
    duration:0.2,
})

tl.pause()

menuButton.addEventListener("click",()=>{
    tl.play()
})

menuCross.addEventListener("click",()=>{
    tl.reverse()
})

menuText.addEventListener("click",()=>{
    tl.reverse()
})

