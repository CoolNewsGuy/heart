"use strict";
const Heart = (function () {
   let heart = document.querySelector(".heart"),
      parts = document.querySelectorAll(".half"),
      name = document.querySelector(".name");

   return {
      heart,
      parts,
      name,
      beat,
      color: "red",
      changeHeartColor,
   };

   function beat() {
      heart.classList.add("beated-heart");

      setTimeout(() => heart.classList.remove("beated-heart"), 400);
      setTimeout(beat, 1200);
   }

   function changeHeartColor() {
      parts.forEach((part) => (part.style.background = ShadowHeart.color));

      ShadowHeart.parts.forEach(
         (part) => (part.style.background = Heart.color)
      );

      // switch the colors
      [Heart.color, ShadowHeart.color] = [ShadowHeart.color, Heart.color];
   }
})();
