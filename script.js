document.addEventListener("DOMContentLoaded", function () {
  let totalGems = 129;
  let energy = 1000;
  let level = 1;
  const maxLevel = 9;
  const gemsToLevelUp = 5000;
  const progressBar = document.getElementById("progress-bar");
  const totalGemsElement = document.getElementById("total-gems");
  const energyElement = document.getElementById("energy");
  const levelElement = document.getElementById("level");
  const cake = document.getElementById("cake");
  const cakeImage = document.querySelector(".cake-image");

  cake.addEventListener("click", function (e) {
    // Floating number animation
    var number = document.createElement("div");
    number.className = "floating-number";
    number.innerText = "+1";
    number.style.left = e.pageX + "px";
    number.style.top = e.pageY + "px";
    document.body.appendChild(number);
    setTimeout(function () {
      number.remove();
    }, 1000); // Time to remove the number from the DOM after animation ends

    // Cake image tilt effect
    cakeImage.classList.add("tilt");

    // Reset the tilt effect after animation
    setTimeout(() => {
      cakeImage.classList.remove("tilt");
    }, 300); // Match the duration of the CSS transition

    // Update UI
    if (energy >= 1) {
      totalGems++;
      energy -= 1;

      if (totalGems >= gemsToLevelUp) {
        if (level < maxLevel) {
          level++;
          totalGems = 0; // Reset gems
        }
      }

      updateUI();
    }
  });

  function updateUI() {
    totalGemsElement.innerText = totalGems;
    energyElement.innerText = `${energy}/1000`;
    levelElement.innerText = `Level ${level}/${maxLevel}`;
    const progressPercentage = (totalGems / gemsToLevelUp) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }

  updateUI();
});
