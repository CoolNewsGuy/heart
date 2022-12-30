const createStar = function () {
   let star = document.querySelector(".star").cloneNode();

   star.style.cssText = `
      position: absolute;
      top: ${Math.random() * 952}px;
      left: ${Math.random() * 1921}px;
      z-index: 999;
   `;

   function animateStar() {
      star.style.top = +star.style.top.replace("px", "") + 1 + "px";
   }

   setInterval(animateStar, 100);

   document.body.insertBefore(star, document.querySelector(".star"));
};

// for (let i = 0; i < 50; i++) createStar();
