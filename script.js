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

  function handleTap(x, y) {
    var number = document.createElement("div");
    number.className = "floating-number";
    number.innerText = "+1";
    number.style.left = x + "px";
    number.style.top = y + "px";
    document.body.appendChild(number);
    setTimeout(function () {
      number.remove();
    }, 1000);

    cakeImage.classList.add("tilt");

    setTimeout(() => {
      cakeImage.classList.remove("tilt");
    }, 300);

    // Update UI
    if (energy >= 1) {
      totalGems++;
      energy -= 1;

      if (totalGems >= gemsToLevelUp) {
        if (level < maxLevel) {
          level++;
          totalGems = 0; 
        }
      }

      updateUI();
    }
  }

  function updateUI() {
    totalGemsElement.innerText = totalGems;
    energyElement.innerText = `${energy}/1000`;
    levelElement.innerText = `Level ${level}/${maxLevel}`;
    const progressPercentage = (totalGems / gemsToLevelUp) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }

  cake.addEventListener("touchstart", function (e) {
    e.preventDefault();

    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      handleTap(touch.pageX, touch.pageY);
    }
  });

  cake.addEventListener("click", function (e) {
    handleTap(e.pageX, e.pageY);
  });

  updateUI();
});
