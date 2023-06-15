import { useEffect } from "react";
export default function MultipleAnimator(runOnChange) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".fastSlide");
    const hiddenElement = document.querySelectorAll(".rightSlide");
    const slideUpElement = document.querySelectorAll(".SlideUp");
    const slideElement = document.querySelectorAll(".slideDown");
    const fadeinElement = document.querySelectorAll(".sideSlide1");
    const slideLeftElement = document.querySelectorAll(".sideSlideLeft");
    const boxElement = document.querySelectorAll(".sideSlide");
    const shoeElement = document.querySelectorAll(".shoeAnimation");
    const flipElement = document.querySelectorAll(".flipIn");
    const colorElement = document.querySelectorAll(".color");
    const tranlateElement = document.querySelectorAll(".tranlatetop");
    hiddenElements.forEach((el) => observer.observe(el));
    slideUpElement.forEach((el) => observer.observe(el));
    slideElement.forEach((el) => observer.observe(el));
    flipElement.forEach((el) => observer.observe(el));
    hiddenElement.forEach((el) => observer.observe(el));
    fadeinElement.forEach((el) => observer.observe(el));
    boxElement.forEach((el) => observer.observe(el));
    shoeElement.forEach((el) => observer.observe(el));
    colorElement.forEach((el) => observer.observe(el));
    tranlateElement.forEach((el) => observer.observe(el));
    slideLeftElement.forEach((el) => observer.observe(el));
  }, [runOnChange]);
}
