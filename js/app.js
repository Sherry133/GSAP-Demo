// import {
//     TimelineMax
// } from "all.js";
// import {
//     TweenLite
// } from "./js/all";

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});

const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
// const logo = document.querySelector("#logo");
const headline = document.querySelector(".headline");
const sslogo = document.querySelector(".sslogo");

const tl =
    new TimelineMax();
tl.fromTo(hero, 1, {
        height: "0%"
    }, {
        height: "80%",
        ease: Power2.easeInOut

    })
    .fromTo(hero, 1, {
        width: "100%"
    }, {
        width: "80%",
        ease: Power2.easeInOut
    })

    .fromTo(slider, 1, {
            x: "-100%"
        },

        {
            x: "0%",
            ease: Power2.easeInOut
        },
        "-=1.2"
    )
    // .fromTo(logo, 0.5, {
    //     opacity: 0,
    //     x: 30
    // }, {
    //     opacity: 1,
    //     x: 0
    // }, "-=0.5")

    .fromTo(hamburger, 0.5, {
        opacity: 0,
        x: 30
    }, {
        opacity: 1,
        x: 0
    }, "-=0.5")

    .fromTo(headline, 0.5, {
        opacity: 0,
        x: 30
    }, {
        opacity: 1,
        x: 0
    }, "-=.25")


    .from(sslogo, {
        opacity: 0,
        scale: 0.3,
        ease: "back"
    })
    .to(sslogo, {
        duration: 5,
        rotation: 360
    });

// $(".navbar-collapse a").click(function () {
//     $(".navbar-collapse").collapse("hide");
// })