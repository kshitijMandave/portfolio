document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_vfs1tdm", "template_ok31xun", this).then(
      function () {
        alert("Message sent successfully!");
      },
      function (error) {
        alert("Failed to send message: " + error.text);
      }
    );
  });
