<?php

echo "<h2>Form Verileri</h2>";

echo "Ad: " . $_POST["name"] . "<br>";
echo "Email: " . $_POST["email"] . "<br>";
echo "Telefon: " . $_POST["phone"] . "<br>";
echo "Cinsiyet: " . $_POST["gender"] . "<br>";

echo "İlgi Alanları: ";
if(isset($_POST["interest"])) {
    foreach($_POST["interest"] as $i) {
        echo $i . " ";
    }
}

echo "<br>";
echo "Şehir: " . $_POST["city"] . "<br>";
echo "Mesaj: " . $_POST["message"] . "<br>";

?>