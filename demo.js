document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector("#demo-modal");
  if (!modal) return;

  const form = modal.querySelector("form");
  const success = modal.querySelector(".success, .demo-success");

  const closeModal = () => {
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
    success.classList.remove("show");
  };

  document.querySelectorAll("[data-demo]").forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.add("open");
      document.body.classList.add("modal-open");
      modal.querySelector("input").focus();
    });
  });

  modal.querySelectorAll("[data-close]").forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value;
    success.textContent = `Thanks, ${name}! Your demo request is ready. We’ll be in touch at ${email}.`;
    success.classList.add("show");
    form.reset();
  });
});
