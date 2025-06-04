// js/auth.js

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = new FormData(registerForm);
      const reader = new FileReader();
      const file = form.get("photo");

      reader.onloadend = () => {
        const user = {
          name: form.get("name"),
          age: form.get("age"),
          gender: form.get("gender"),
          photo: reader.result,
          address: form.get("address"),
          phone: form.get("phone"),
          email: form.get("email"),
          password: form.get("password"),
        };

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        if (users.find((u) => u.phone === user.phone)) {
          alert("Ese número ya está registrado.");
          return;
        }

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("¡Registro exitoso!");
        window.location.href = "login.html";
      };

      if (file) reader.readAsDataURL(file);
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = new FormData(loginForm);
      const phone = form.get("phone");
      const password = form.get("password");

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(u => u.phone === phone && u.password === password);

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "index.html";
      } else {
        alert("Credenciales incorrectas.");
      }
    });
  }
});
