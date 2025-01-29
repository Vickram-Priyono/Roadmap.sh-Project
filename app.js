// Tab Handler
const tabs = document.querySelectorAll(".tab");
const btns = document.querySelectorAll(".btn-tab");
let map = null; // Variabel untuk menyimpan instance map
let isMapInitialized = false; // Flag untuk cek inisialisasi

function showTab(tabId) {
  tabs.forEach((tab) => {
    if (tab.id === tabId) {
      tab.classList.remove("hide");

      // Inisialisasi map hanya saat tab lokasi ditampilkan pertama kali
      if (tabId === "tab-3" && !isMapInitialized) {
        initializeMap();
        isMapInitialized = true;
      }

      // Paksa update ukuran map setelah tab ditampilkan
      if (tabId === "tab-3" && map) {
        setTimeout(() => {
          map.invalidateSize();
        }, 50);
      }
    } else {
      tab.classList.add("hide");
    }
  });
}

function initializeMap() {
  // Buat instance map
  map = L.map("map").setView([-6.157979, 106.845844], 16);

  // Tambahkan tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Tambahkan marker
  L.marker([-6.157979, 106.845844])
    .addTo(map)
    .bindPopup("Ayam Appolo")
    .openPopup();

  // Handle window resize
  window.addEventListener("resize", () => {
    map.invalidateSize();
  });
}

// Event listener untuk tombol tab
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const tabId = e.target.id.replace("btn", "tab");
    showTab(tabId);
  });
});

// Buka tab pertama secara default
showTab("tab-1");
