const createStar = function () {
   let star = document.querySelector(".star").cloneNode(),
      hideAnimationTime = Math.random() * 12 + 6;

   star.style.cssText = `
      position: absolute;
      top: ${Math.random() * 952}px;
      left: ${Math.random() * 1921}px;
      z-index: 999;
      animation: hide-star ${hideAnimationTime}s linear;
   `;

   function animateStar() {
      star.style.top = +star.style.top.replace("px", "") + 1 + "px";
   }

   function removeStar() {
      document.body.removeChild(star);
   }

   setInterval(animateStar, 100);
   setTimeout(() => {
      removeStar();
      createStar();
   }, hideAnimationTime * 1000);

   document.body.insertBefore(star, document.querySelector(".star"));
};

// for (let i = 0; i < 50; i++) createStar();
