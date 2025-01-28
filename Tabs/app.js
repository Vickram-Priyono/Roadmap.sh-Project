const btn = document.querySelectorAll(".btn-tab");
const tab = document.querySelectorAll(".tab");

for (let button of btn) {
  button.addEventListener("click", () => {
    tab[0].style.display = "none";
    tab[1].style.display = "none";
    tab[2].style.display = "none";
    tab[3].style.display = "none";

    if (button.id === "btn-1") {
      tab[0].style.display = "block";
    } else if (button.id === "btn-2") {
      tab[1].style.display = "block";
    } else if (button.id === "btn-3") {
      tab[2].style.display = "block";
    } else {
      tab[3].style.display = "block";
    }
  });
}
