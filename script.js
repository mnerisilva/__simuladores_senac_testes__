const red_car = document.querySelector("svg #red-car");
const yellow_car = document.querySelector("svg #yelloe-car");
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
    repeatDelay: 2
}); 
