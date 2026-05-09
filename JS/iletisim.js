function validateJS() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let error = "";
  if (!name.trim()) error += "Ad boş olamaz\n";

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailPattern)) error += "Email hatalı\n";

  let phonePattern = /^[0-9]+$/;
  if (!phone.match(phonePattern)) error += "Telefon sadece rakam olmalı\n";

  document.getElementById("jsError").innerText = error;
}

new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
    phone: "",
    message: "",
    vueError: "",
  },
  methods: {
    validateVue() {
      let error = "";
      if (this.name.length < 3) error += "Ad en az 3 karakter\n";

      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) error += "Email geçersiz\n";

      let phonePattern = /^[0-9]+$/;
      if (!phonePattern.test(this.phone))
        error += "Telefon sadece rakam olmalı\n";

      this.vueError = error;
    },
  },
});
