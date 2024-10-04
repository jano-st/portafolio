document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const form = document.getElementById("contact-form");
    const btn = document.getElementById("btn-enviar");
    const alerta = new bootstrap.Modal(document.getElementById("modal-alerta"));

    if (name && email && message) {
      form.reset();
      document.getElementById("texto-submit").innerText = "Enviar";
      btn.removeAttribute("disabled");
      alerta.show();
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
