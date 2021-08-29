"use strict";

const opnModel = document.querySelectorAll(".Modal-button");
const model = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const closeModel = document.querySelector(".close-modal");

function openModal() {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (const content of opnModel) {
  content.addEventListener("click", openModal);
  closeModel.addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) {
    // console.log(e.key);

    if (e.key === "Escape" && !model.classList.contains("hidden")) {
      closeModal();
    }
  });
}
