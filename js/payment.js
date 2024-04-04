document.addEventListener("DOMContentLoaded", function () {
  const totalAmount = sessionStorage.getItem("totalAmount");
  const totalElement = document.querySelector(".total");

  if (totalAmount) {
    totalElement.innerText = `Total: Rp${totalAmount}`;
  }
});
document.getElementById("back").addEventListener("click", function () {
  window.location.href = "menu.html";
});

document.getElementById("process").addEventListener("click", function () {
  alert("Pembayaran Berhasil, tunggu pesanan anda. Terima Kasih");
  window.location.href = "home.html";
});

document.addEventListener("DOMContentLoaded", function () {
  const takeawaySelect = document.getElementById("takeaway");
  const addressForm = document.querySelector(".address-form");
  const cardDetails = document.querySelector(".card-details-container");

  takeawaySelect.addEventListener("change", function () {
    if (takeawaySelect.value === "notakeaway") {
      // Jika pilihan bukan takeaway, sembunyikan form alamat dan detail kartu
      addressForm.style.display = "none";
      cardDetails.style.display = "none";
    } else {
      // Jika pilihan takeaway, tampilkan form alamat dan detail kartu
      addressForm.style.display = "block";
      cardDetails.style.display = "block";
    }
  });
});
