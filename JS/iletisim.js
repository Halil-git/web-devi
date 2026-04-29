function  validateJS() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let error = "";
    if(name === "")
        error += "Ad boş olamaz\n";

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern))
        error += "Email hatalı\n";

    let phonePattern = /^[0-9]+$/;
    if(!phone.match(phonePattern))
        error += "Telefon sadece rakam olmalı\n";

    document.getElementById("error").innerText = error;
}

new Vue({
    el: '#app',
    methods: {
        validateVue() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;

            let error = "";
            if(name.length < 3)
                error += "Ad en az 3 karakter\n";
            if(!email.includes("@"))
                error += "Email geçersiz\n";
            if(isNaN(phone))
                error += "Telefon sayı olmalı\n";

            document.getElementById("error").innerText = error;
        }
    }
});