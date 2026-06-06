gsap.registerPlugin(ScrollTrigger);

/* LOADER */
window.addEventListener("load", () => {
  gsap.to(".loader", {
    opacity: 0,
    duration: 1,
    onComplete: () => document.querySelector(".loader").remove()
  });
});

/* HERO TIMELINE */
const heroTl = gsap.timeline();

heroTl.from(".hero-card img", {
  scale: 0.6,
  opacity: 0,
  duration: 1
})
.from(".hero-title", {
  y: 50,
  opacity: 0,
  duration: 0.8
})
.from(".hero-subtitle, .text-muted", {
  opacity: 0,
  y: 20,
  stagger: 0.2
});

/* SCROLL REVEAL */
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%"
    },
    y: 60,
    opacity: 0,
    duration: 1
  });
});

/* STATS COUNTER */
document.querySelectorAll(".stat h3").forEach((el) => {
  let end = parseInt(el.dataset.count);

  gsap.to(el, {
    innerText: end,
    duration: 2,
    snap: { innerText: 1 },
    scrollTrigger: {
      trigger: el,
      start: "top 85%"
    }
  });
});

/* TYPING EFFECT */
const text = ["IT support systems",
  "software systems",
  "automation tools"];
let i = 0;

setInterval(() => {
  i = (i + 1) % text.length;
  document.getElementById("typing-text").textContent = text[i];
}, 3000);

/* CURSOR GLOW */
const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.15
  });
});
