import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function main() {
  buttonClickHandler();
}

function buttonClickHandler() {
  const btnSignUp = document.getElementById("btn-signup") as HTMLButtonElement;
  const progressOverlay = document.getElementById(
    "progress-overlay"
  ) as HTMLElement;
  const signupContainer = document.getElementById(
    "signup-container"
  ) as HTMLElement;
  const successOverlay = document.getElementById(
    "success-overlay"
  ) as HTMLElement;
  const successOkBtn = document.getElementById("success-ok-btn") as HTMLElement;

  if (btnSignUp) {
    btnSignUp.addEventListener("click", async (event) => {
      event.preventDefault();

      const username = document.getElementById("username") as HTMLInputElement;
      const email = document.getElementById("email") as HTMLInputElement;
      const password = document.getElementById("password") as HTMLInputElement;

      // Null checks
      if (
        !username.value.trim() ||
        !email.value.trim() ||
        !password.value.trim()
      ) {
        alert("Please fill in all fields.");
        return;
      }

      // Hide form and show progress bar
      if (signupContainer) signupContainer.classList.add("hidden");
      if (progressOverlay) progressOverlay.style.display = "flex";
      const progress = progressOverlay?.querySelector(
        ".progress"
      ) as HTMLElement;
      if (progress) progress.style.width = "50%"; // Show half progress during loading

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        // After successful sign-up
        const userData = {
          uid: userCredential.user.uid,
          username: username.value,
          email: email.value,
          token: await userCredential.user.getIdToken(),
          loggedIn: true,
          imageUrl: "./public/leetcode.svg",
        };
        localStorage.setItem("userData", JSON.stringify(userData));

        // Complete the progress bar
        if (progress) progress.style.width = "100%";

        // Show the success message
        setTimeout(() => {
          if (progressOverlay) progressOverlay.style.display = "none";
          if (successOverlay) successOverlay.style.display = "flex";
        }, 500); // Show success after progress is complete
      } catch (error) {
        console.error("Error during sign-up:", error);
        alert(`Something went wrong.`);
      } finally {
        // Allow closing the success message and redirect to the home page
        if (successOkBtn) {
          successOkBtn.addEventListener("click", () => {
            // Redirect to home (index.html) one level up
            window.location.href = "../../index.html";
          });
        }
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", main);
