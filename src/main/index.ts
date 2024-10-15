import { URLs } from "../constants";

function main() {
  buttonClickHandler();
  displayUserProfile(); // Call function to display user profile if logged in
}

function buttonClickHandler() {
  const contributeButton = document.getElementById(
    "contribute-button"
  ) as HTMLButtonElement;
  const btnLogin = document.getElementById("login-signup") as HTMLButtonElement;

  if (contributeButton) {
    contributeButton.addEventListener("click", () => {
      window.location.href = URLs.CONTRIBUTION;
    });
  }

  if (btnLogin) {
    btnLogin.addEventListener("click", () => {
      window.location.href = "/src/layouts/signup.html";
    });
  }
}

function displayUserProfile() {
  const userData = JSON.parse(localStorage.getItem("userData") || "null");

  const userProfile = document.getElementById("user-profile") as HTMLElement;
  const btnLogin = document.getElementById("login-signup") as HTMLButtonElement;
  const userImage = document.getElementById("user-image") as HTMLImageElement;

  if (userData && userData.loggedIn) {
    // If user is logged in, display their profile
    userImage.src = "./public/profile.svg";

    userProfile.classList.remove("hidden"); // Show profile section
    btnLogin.classList.add("hidden"); // Hide login/signup button
  } else {
    // If no user data, ensure profile section is hidden and login/signup is shown
    userProfile.classList.add("hidden"); // Hide profile section
    userProfile.style.display = "none"; // Ensure it takes no space
    btnLogin.classList.remove("hidden"); // Show login/signup button
  }
}

document.addEventListener("DOMContentLoaded", main);
