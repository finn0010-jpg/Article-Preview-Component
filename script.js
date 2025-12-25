const shareBtn = document.querySelector("button");
const sharePanel = document.querySelector(".share");
const closeBtn = document.querySelector(".close-share");

function toggleShare() {
  sharePanel.classList.toggle("hidden");
}

shareBtn.addEventListener("click", toggleShare);
closeBtn.addEventListener("click", toggleShare);