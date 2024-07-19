document.addEventListener("DOMContentLoaded", function () {
    const reloadIcon = document.getElementById("reload");
  const friendsList = document.getElementById("friends-list");
  const friendsCount = document.getElementById("friends-count");

  const updateFriendsCount = () => {
    const numberOfFriends = friendsList.children.length;
    friendsCount.textContent = `Friends list (3)`;
    console.log(numberOfFriends)
  };

  reloadIcon.addEventListener("click", function () {
    reloadIcon.classList.add("shake");

    setTimeout(() => {
      reloadIcon.classList.remove("shake");

      friendsList.innerHTML = "";

      const friendsData = [
        {
          avatar: "./assets/avatar1.png",
          name: "Angella Bell",
          gem: "./assets/gem.png",
        },
        {
          avatar: "./assets/avatar2.png",
          name: "Deluxe66",
          gem: "./assets/gem.png",
        },
        {
          avatar: "./assets/avatar3.png",
          name: "Anglabell",
          gem: "./assets/gem.png",
        },
      ];

      friendsData.forEach((friend, index) => {
        const friendItem = document.createElement("div");
        friendItem.classList.add("friend-item");
        friendItem.innerHTML = `
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-white"></div>
              <span>${friend.name}</span>
            </div>
            <div class="flex items-center">
              <img src="${friend.gem}" alt="gem icon" class="w-[22.22px] h-[22px]">
              <p class="text-[#FFFF22] font-bold px-1">+5.000</p>
            </div>
          `;
        friendsList.appendChild(friendItem);

        if (index < friendsData.length - 1) {
          const divider = document.createElement("div");
          friendsList.appendChild(divider);
        }
      });

      updateFriendsCount();
    }, 500);
  });

  // Hiệu ứng xuất hiện khi tải trang
  const inviteFriendsSection = document.querySelector(".invite-friends");
  const friendListSection = document.querySelector(".friend-list");

  inviteFriendsSection.classList.add("slideLeft");
  friendListSection.classList.add("slideUp");
});