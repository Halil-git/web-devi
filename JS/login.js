document.getElementById("loginForm").addEventListener("submit", function(e) {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorEl = document.getElementById("error");

    errorEl.textContent = "";

    if(email === "" || password === "") {
        e.preventDefault();
        errorEl.textContent = "Tüm alanları doldurun!";
        return;
    }

    let regex = /^[a-z]\d{10}@sakarya\.edu\.tr$/;

    if(!regex.test(email)) {
        e.preventDefault();
        errorEl.textContent = "Geçerli okul maili giriniz!";
        return;
    }
});

const { createApp } = Vue;

createApp({
    data() {
        return {
            email: "",
            password: "",
            error: ""
        }
    },
    methods: {
        vueValidate() {
            this.error = "";

            if(this.email === "" || this.password === "") {
                this.error = "Vue: Alanlar boş!";
                return;
            } 

            const regex = /^[a-z]\d{10}@sakarya\.edu\.tr$/;

            if(!regex.test(this.email)) {
                this.error = "Vue: Mail formatı hatalı!";
                return;
            }

            this.error = "Vue doğrulama başarılı";
        }
    }
}).mount("#app");

const params = new URLSearchParams(window.location.search);
const err = params.get("error");

if(err === "hatali") {
    document.getElementById("error").textContent = "Hatalı giriş!";
}

if(err === "bos") {
    document.getElementById("error").textContent = "Boş alan bırakmayın!";
}