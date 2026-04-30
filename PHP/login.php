<?php

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

$dogruEmail = "b2412100001@sakarya.edu.tr";
$dogruSifre = "b2412100001";

if(empty($email) || empty($password)) {
    header("Location: login.html?error=bos");
    exit();
}

if($email === $dogruEmail && $password === $dogruSifre) {
    $ogrNo = substr($email, 0, strpos($email,"@"));

    echo "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <title>Hoşgeldiniz</title>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'>
    </head>
    <body class='d-flex justify-content-center align-items-center vh-100'>
        <div class='text-center'>
            <h1 class='text-success'>Hoşgeldiniz $ogrNo</h1>
        </div>
    </body>
    </html>
    ";
} else {
    header("Location: login.html?error=hatali");
    exit();
}