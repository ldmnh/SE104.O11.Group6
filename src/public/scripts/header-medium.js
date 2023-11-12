function redirectToUrl(url) {
  window.location.href = url;
}

// Header-medium
const homepageBtnHm = document.querySelector(".homepage-btn-hm");
const notiBtnHm = document.querySelector(".noti-btn-hm");
// const signinBtnHm = document.querySelector(".signin-btn-hm");
// const signupBtnHm = document.querySelector(".signup-btn-hm");

homepageBtnHm.addEventListener("click", () => redirectToUrl("/"));
notiBtnHm.addEventListener("click", () =>
  redirectToUrl("/notification/account-update")
);
// signinBtnHm.addEventListener("click", () => redirectToUrl("/auth/login"));
// signupBtnHm.addEventListener("click", () => redirectToUrl("/auth/register"));

const nameClickHm = document.querySelector(".name-btn-hm");
const avatarClickHm = document.querySelector(".avatar-btn-hm");
const logoClickHm = document.querySelector(".logo-click-hm");

nameClickHm.addEventListener("click", () =>
  redirectToUrl("/account/information")
);
avatarClickHm.addEventListener("click", () =>
  redirectToUrl("/account/information")
);

logoClickHm.addEventListener("click", () => redirectToUrl("/"));
