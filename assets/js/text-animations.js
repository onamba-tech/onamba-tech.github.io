document.addEventListener("DOMContentLoaded", () => {
  // Wrap every letter in a span
  let wrappedText = document.querySelectorAll(".ml3");
  for (let textWrapper of wrappedText) {
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: ".ml3 .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i + 1),
    });
  }

  // Wrap every letter in a span
  var textWrapper = document.querySelector(".ml13");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml13 .letter",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 300 + 30 * i,
    })
    .add({
      targets: ".ml13 .letter",
      translateY: [0, -100],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1200,
      delay: (el, i) => 100 + 30 * i,
    });
});
