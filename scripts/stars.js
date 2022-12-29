const createStar = function () {
   let star = document.querySelector(".star").cloneNode();

   star.style.cssText = `
      position: absolute;
      top: ${Math.random() * 952}px;
      left: ${Math.random() * 1921}px;
      z-index: 999;
   `;

   document.body.insertBefore(star, document.querySelector(".star"));
};

for (let i = 0; i < 40; i++) createStar();
