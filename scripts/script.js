const Heart = (function () {
   let heart = document.querySelector(".heart"),
      parts = document.querySelectorAll(".half"),
      name = document.querySelector(".name");

   return {
      heart,
      parts,
      name,
      beat,
   };

   function beat() {
      heart.classList.add("beated-heart");

      setTimeout(() => heart.classList.remove("beated-heart"), 400);
      setTimeout(beat, 1200);
   }
})();

onload = Heart.beat;
