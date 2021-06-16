const red_car = document.querySelector("svg #red-car");
const yellow_car = document.querySelector("svg #yellow-car");
const blue_car = document.querySelector("svg #blue-car");
//car.style.display = "none";

//car.style.transform = "translate("+635+"px, "+288+"px)";

//transform: "translate("+635+"px, "+288+px")";

gsap.to("#yellow-car",{
    delay: 1.5,
    duration: 7,
    x: 1175,
    y: -700,
    ease: "none",
    repeat: -1,
    repeatDelay: 2
}); 


gsap.to("#tax-car",{
    duration: 7,
    x: 1175,
    y: 600,
    ease: "none",
    repeat: -1,
    repeatDelay: 3
}); 

gsap.to("#blue-car",{
    duration: 7,
    x: -1420,
    y: -777,
    ease: "none",
    repeat: -1,
    repeatDelay: 1
}); 

gsap.to("#red-car",{
    duration: 7,
    x: 1175,
    y: 600,
    ease: "none",
    repeat: -1,
    repeatDelay: 2
});
