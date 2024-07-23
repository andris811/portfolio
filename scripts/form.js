document.addEventListener('DOMContentLoaded', function () {
  // Bootstrap form validation
  (function () {
      'use strict';
      window.addEventListener('load', function () {
          const forms = document.getElementsByClassName('needs-validation');
          Array.prototype.filter.call(forms, function (form) {
              form.addEventListener('submit', function (event) {
                  if (form.checkValidity() === false) {
                      event.preventDefault();
                      event.stopPropagation();
                  }
                  form.classList.add('was-validated');
              }, false);
          });
      }, false);
  })();

  // Real-time form validation
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const messageField = document.getElementById('message');

  nameField.addEventListener('input', function () {
      if (nameField.validity.valid) {
          nameField.classList.remove('is-invalid');
          nameField.classList.add('is-valid');
      } else {
          nameField.classList.remove('is-valid');
          nameField.classList.add('is-invalid');
      }
  });

  emailField.addEventListener('input', function () {
      if (emailField.validity.valid) {
          emailField.classList.remove('is-invalid');
          emailField.classList.add('is-valid');
      } else {
          emailField.classList.remove('is-valid');
          emailField.classList.add('is-invalid');
      }
  });

  messageField.addEventListener('input', function () {
      if (messageField.validity.valid) {
          messageField.classList.remove('is-invalid');
          messageField.classList.add('is-valid');
      } else {
          messageField.classList.remove('is-valid');
          messageField.classList.add('is-invalid');
      }
  });

  // Spam prevention (simple example)
  const honeypot = document.getElementById('honeypot');
  document.getElementById('contact-form').addEventListener('submit', function (event) {
      if (honeypot.value) {
          event.preventDefault(); // If honeypot field is filled, block form submission
      }
  });
});
