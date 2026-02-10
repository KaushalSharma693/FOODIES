import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase.js";

export async function handleForgotPassword(event) {
  event.preventDefault();

  const email = document.getElementById("forgot-email").value;

  try {
    await sendPasswordResetEmail(auth, email);
    showMessage("forgot-success", "Reset email sent! Check inbox.");
  } catch (error) {
    showMessage("forgot-error", error.message);
  }
}
