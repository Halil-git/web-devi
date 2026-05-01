<?php

echo "<h2>Form Verileri</h2>";

echo "Ad: " . htmlspecialchars($_POST["name"]) . "<br>";
echo "Email: " . htmlspecialchars($_POST["email"]) . "<br>";
echo "Telefon: " . htmlspecialchars($_POST["phone"]) . "<br>";
echo "Cinsiyet: " . htmlspecialchars($_POST["gender"]) . "<br>";

echo "İlgi Alanları: ";
if(isset($_POST["interest"])) {
    foreach($_POST["interest"] as $i) {
        echo htmlspecialchars($i) . " ";
    }
}

echo "<br>";
echo "Şehir: " . htmlspecialchars($_POST["city"]) . "<br>";
echo "Mesaj: " . htmlspecialchars($_POST["message"]) . "<br>";

?>