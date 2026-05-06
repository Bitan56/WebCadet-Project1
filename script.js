navBar = document.querySelector("#navbar");
banner = document.querySelector("#banner");
mainBody = document.querySelector("#main-body");
aboutImg = document.querySelector("#about-img");
aboutText = document.querySelector("#about-text");

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
        start:"top 95%%",
        end:"top 70%",
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