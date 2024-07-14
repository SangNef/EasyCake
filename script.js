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
    }, 1000); // Thời gian chờ để loại bỏ số "1" khỏi DOM sau khi hoạt ảnh kết thúc

    // Update UI
    if (energy >= 1) {
      this.classList.add("shrink");
      setTimeout(() => {
        this.classList.remove("shrink");
      }, 300); // Thời gian chờ để loại bỏ hiệu ứng thu nhỏ sau khi hoạt ảnh kết thúc

      totalGems++;
      energy -= 1;

      if (totalGems >= gemsToLevelUp) {
        if (level < maxLevel) {
          level++;
          totalGems = 0; // Đặt lại điểm
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
