const btn = document.querySelectorAll(".btn-tab");
const tabs = document.querySelectorAll(".tab");

for (let button of btn) {
  button.addEventListener("click", () => {
    tabs[0].style.display = "none";
    tabs[1].style.display = "none";
    tabs[2].style.display = "none";

    if (button.id === "btn-1") {
      tabs[0].style.display = "block";
    } else if (button.id === "btn-2") {
      tabs[1].style.display = "block";
    } else {
      tabs[2].style.display = "block";
    }
  });
}

var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
