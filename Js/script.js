function updateTime() {
  const timeElement = document.getElementById("user-time");
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Update every second
updateTime();
setInterval(updateTime, 1000);

const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success");

form.addEventListener("submit", e => {
  e.preventDefault();

  let valid = true;
  successMsg.textContent = "";

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // Reset errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  if (!name.value.trim()) {
    valid = false;
    document.getElementById("error-name").textContent = "Full name required.";
  }

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email.value.trim())) {
    valid = false;
    document.getElementById("error-email").textContent = "Enter a valid email.";
  }

  if (!subject.value.trim()) {
    valid = false;
    document.getElementById("error-subject").textContent = "Subject required.";
  }

  if (message.value.trim().length < 10) {
    valid = false;
    document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
  }

  if (valid) {
    successMsg.textContent = "Message sent successfully!";
    form.reset();
  }
});
