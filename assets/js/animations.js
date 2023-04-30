// /* elements bibliotheques animation */
/* element avant buttons my-element */

const myElement = document.getElementById("my-element");
let position = 0;

myElement.addEventListener("click", () => {
  if (position === 0) {
    gsap.to(myElement, {
      duration: 1,
      x: 200,
      ease: "power4.out",
      onComplete: () => {
        position = 1;
        gsap.to(myElement, {
          duration: 1,
          x: 0,
          ease: "power4.out"
        });
      }
    });
  } else if (position === 1) {
    gsap.to(myElement, {
      duration: 1,
      x: -200,
      ease: "power4.out",
      onComplete: () => {
        position = 2;
        gsap.to(myElement, {
          duration: 1,
          x: 0,
          ease: "power4.out"
        });
      }
    });
  } else if (position === 2) {
    gsap.to(myElement, {
      duration: 1,
      x: 0,
      ease: "power4.out",
      onComplete: () => {
        position = 0;
      }
    });
  }
  
});
/* premiere animation boite button */

const btn = document.getElementById("btn");
const box = document.getElementById("box");


btn.addEventListener("click", () => {
  gsap.to(box, { duration: 1, rotation: "+=360" });
  gsap.to(btn.querySelector("p"), { duration: 1, fontSize: "10px" });
});


/*deuxieme animation boite button animate-btn*/
const animatedBox = document.getElementById("animated-box");
const animateBtn = document.getElementById("animate-btn");

animateBtn.addEventListener("click", () => {
  anime({
    targets: animatedBox,
    translateX: 250,
    rotate: "1turn",
    backgroundColor: "#FFF",
    duration: 1500,
    easing: "easeInOutQuad",
    translateX: 850,
    complete: function() {
      anime({
        targets: animatedBox,
        translateX: 0,
        rotate: "0turn",
        backgroundColor: "#000",
        duration: 1500,
        easing: "easeInOutQuad",
      });
    }
  });
});


/*troiseme animation boite button */

const box2 = $('#box2');
const animateBtn2 = $('#animate-btn2');

animateBtn2.click(function() {
  box2.animate({
    width: "200px",
    height: "200px",
    backgroundColor: "green",
    borderRadius: "0"
  }, 1000, function() {
    box2.animate({
      width: "140px",
      height: "140px",
      backgroundColor: "rgb(135, 206, 21)",
      borderRadius: "50%"
    }, 1000);
  });
  
  animateBtn2.animate({
    width: "200px",
    height: "200px",
    borderRadius: "0"
  }, 1000, function() {
    animateBtn2.animate({
      width: "140px",
      height: "140px",
      borderRadius: "50%"
    }, 1000);
  });
  
  animateBtn2.find('p').animate({
    fontSize: "20px"
  }, 1000, function() {
    animateBtn2.find('p').animate({
      fontSize: "10px"
    }, 1000);
  });
});


/*aanimation boite flexbox */
