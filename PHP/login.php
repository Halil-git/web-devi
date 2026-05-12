<?php

$email = htmlspecialchars($_POST['email'] ?? '');
$password = htmlspecialchars($_POST['password'] ?? '');

$dogruEmail = "b231210043@sakarya.edu.tr";
$dogruSifre = "b231210043";

if(empty($email) || empty($password)) {
    header("Location: ../HTML/login.html?error=bos");
    exit();
}

if($email === $dogruEmail && $password === $dogruSifre) {
    $ogrNo = substr($email, 0, strpos($email,"@"));

    echo "
    <!DOCTYPE html>
    <html lang='tr'>
    <head>
        <meta charset='UTF-8'>
        <title>Hoşgeldiniz</title>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'>
    </head>
    <body class='d-flex justify-content-center align-items-center vh-100'>
        <div class='card p-5 text-center shadow'>
            <h1 class='text-success'>Hoşgeldiniz $ogrNo</h1>
            <p class='mt-3'>Giriş başarılı.</p>

            <a href='../HTML/giris.html' class='btn btn-primary mt-3'>
                Ana Sayfaya Dön
            </a>
        </div>
    </body>
    </html>
    ";
} else {
    header("Location: ../HTML/login.html?error=hatali");
    exit();
}