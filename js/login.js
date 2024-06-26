<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>;

$(document).ready(function () {
  $("#masuk-akun").click(function () {
    event.preventDefault();
    // Data yang akan dikirim
    var dataToSend = {
      username: $("#usernama").val(),
      password: $("#password").val(),
    };

    // Kirim permintaan AJAX ke backend
    $.ajax({
      type: "POST",
      url: "http:127.0.0.1:5000",
      data: formData,
      dataType: "json",
      encode: true,
    })
      .done(function (data) {
        // Menampilkan pesan respons
        $("#login-message").html(data.message);
      })
      .fail(function (data) {
        // Menampilkan pesan jika terjadi kesalahan
        $("#login-message").html("Terjadi kesalahan: " + data.responseText);
      });
  });
});
