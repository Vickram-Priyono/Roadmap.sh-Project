const btn = document.querySelectorAll(".btn-tab");
const tabs = document.querySelectorAll(".tab");

for (let button of btn) {
  button.addEventListener("click", () => {
    tabs[0].style.display = "none";
    tabs[1].style.display = "none";
    tabs[2].style.display = "none";
    tabs[3].style.display = "none";

    if (button.id === "btn-1") {
      tabs[0].style.display = "block";
    } else if (button.id === "btn-2") {
      tabs[1].style.display = "block";
    } else if (button.id === "btn-3") {
      tabs[2].style.display = "block";
    } else {
      tabs[3].style.display = "block";
    }
  });
}
