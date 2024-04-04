$(document).ready(function () {
  $("#re-password").on("input", function () {
    var password = $("#password").val();
    var confirmPassword = $(this).val();

    if (password !== confirmPassword) {
      $(".false-password").addClass("show");
    } else {
      $(".false-password").removeClass("show");
    }
  });

  $("#signup-btn").on("click", function (event) {
    event.preventDefault();
    // Membuat objek untuk menyimpan data pengguna
    var userData = {
      username: $("#username").val(),
      password: $("#password").val(),
    };

    // Menyimpan data pengguna ke session storage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Mengarahkan pengguna ke halaman login
    alert("akun anda berhasil terdaftar, silahkan masuk!");
    window.location.href = "login.html";
  });
});
