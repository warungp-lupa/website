<?php
// Data untuk login (contoh)
$username = 'admin';
$password = 'password';

// Menerima data dari permintaan POST
$usernameInput = $_POST['username'];
$passwordInput = $_POST['password'];

// Memeriksa apakah username dan password cocok
if ($usernameInput === $username && $passwordInput === $password) {
    // Jika cocok, kirim respons berhasil
    $response = array('success' => true, 'message' => 'Login berhasil!');
} else {
    // Jika tidak cocok, kirim respons gagal
    $response = array('success' => false, 'message' => 'Username atau password salah.');
}

// Mengirim respons dalam format JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
