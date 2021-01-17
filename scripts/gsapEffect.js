var tlLoad = gsap.timeline();

tlLoad.from("header ul", 1.2, { y: '-100%' })
    .from('.first', 2, { opacity: 0 }, "0.6");





var tlFirstPlace = gsap.timeline({
    scrollTrigger: {
        trigger: '.first .vert-line20',
        start: "top center",
        toggleActions: "restart reset restart pause",
    }
});

tlFirstPlace
    .fromTo('.first__place p', 0.6, { opacity: 0 }, { opacity: 1 }, 0.6)
    .fromTo('.first__place h3', 0.6, { opacity: 0 }, { opacity: 1 }, 0.6)
    .from('.first__place h3', 1.2, { x: 0, y: 70, z: 0, rotation: -42, rotationX: -72, rotationY: 23, skewY: 13, ease: Back.easeOut.config(1) }, 0)
    .from('.first__place p', 1.2, { x: 0, y: 70, z: 0, rotation: -42, rotationX: -72, skewY: 13, ease: Back.easeOut.config(1) }, 0.6);



var tlService = gsap.timeline({
    scrollTrigger: {
        trigger: '.title',
        start: "top center",
        toggleActions: "restart reset restart pause",
    }
});

tlService
    .from('.title', 0.5, { y: 30, opacity: 0, stagger: '0.3' })



