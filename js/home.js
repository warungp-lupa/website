let listProductHTML = document.querySelector(".listProduct");
let products = [];
var openPopupBtn = document.getElementById("masukBtn");
var popup = document.getElementById("popup-form");

// Ketika tombol dibuka, tampilkan popup
openPopupBtn.addEventListener("click", function () {
  popup.style.display = "block";
});

// Ketika tombol close di klik, sembunyikan popup
popup.querySelector(".close").addEventListener("click", function () {
  popup.style.display = "none";
});

// Jika pengguna mengklik di luar popup, sembunyikan juga
window.addEventListener("click", function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});

fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    addDataToHTML();
  });

const addDataToHTML = () => {
  // add new datas
  if (products.length > 0) {
    // if has data
    products.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.dataset.id = product.id;
      newProduct.classList.add("item");
      newProduct.innerHTML = `<img src="${product.image}" alt="">
                  <h2>${product.name}</h2>
                  <p>${product.desc}</p>
                  <div class="price">Rp${product.price}</div>
                  <button class="addCart">+</button>`;
      listProductHTML.appendChild(newProduct);
    });
  }
};
