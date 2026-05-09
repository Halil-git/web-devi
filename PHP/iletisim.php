<?php

echo "<h2>Form Verileri</h2>";

$name = $_POST["name"] ?? "";
$email = $_POST["email"] ?? "";
$phone = $_POST["phone"] ?? "";
$gender = $_POST["gender"] ?? "";
$city = $_POST["city"] ?? "";
$message = $_POST["message"] ?? "";

echo "Ad: " . htmlspecialchars($name) . "<br>";
echo "Email: " . htmlspecialchars($email) . "<br>";
echo "Telefon: " . htmlspecialchars($phone) . "<br>";
echo "Cinsiyet: " . htmlspecialchars($gender) . "<br>";

echo "İlgi Alanları: ";
if(isset($_POST["interest"])) {
    foreach($_POST["interest"] as $i) {
        echo htmlspecialchars($i) . " ";
    }
}

echo "<br>";
echo "Şehir: " . htmlspecialchars($city) . "<br>";
echo "Mesaj: " . htmlspecialchars($message) . "<br>";

?>