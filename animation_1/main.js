
let t1 = gsap.timeline();

t1.to(".blue", { xPercent: "-100", y: "200%", duration: 1 ,id:"blue" })
    .to(".red", { x: "400%", y: "200%", duration: 1 });


GSDevTools.create({
    animation: t1,
    minimal: false,
    paused: false
})  