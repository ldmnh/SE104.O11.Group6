function redirectToUrl(url) {
  window.location.href = url;
}

// Header-full
const homepageBtnHf = document.querySelector("#homepage-btn-hf");
const notiBtnHf = document.querySelector(".noti-btn-hf");
const signinBtnHf = document.querySelector(".signin-btn-hf");
const signupBtnHf = document.querySelector(".signup-btn-hf");
const logoClickHf = document.querySelector(".logo-click-hf");
logoClickHf.addEventListener("click", () => redirectToUrl("/"));

homepageBtnHf.addEventListener("click", () => redirectToUrl("/"));
notiBtnHf.addEventListener("click", () =>
  redirectToUrl("/notifications/account-update")
);

