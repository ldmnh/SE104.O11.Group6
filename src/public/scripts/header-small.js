function redirectToUrl(url) {
  window.location.href = url;
}

// Header-small
const homepageBtnHs = document.querySelector("#homepage-btn-hs");
const notiBtnHs = document.querySelector("#noti-btn-hs");
const signinBtnHs = document.querySelector(".signin-btn-hs");
const signupBtnHs = document.querySelector(".signup-btn-hs");
// const nameClickHs = document.querySelector(".name-btn-hs");
// const avatarClickHs = document.querySelector(".avatar-btn-hs");

// homepageBtnHs.addEventListener("click", () => redirectToUrl("/"));
notiBtnHs.addEventListener("click", () =>
  redirectToUrl("/notifications/account-update")
);
// signinBtnHs.addEventListener("click", () => redirectToUrl("/auth/login"));
// signupBtnHs.addEventListener("click", () => redirectToUrl("/auth/register"));

nameClickHs.addEventListener("click", () =>
  redirectToUrl("/account/information")
);
avatarClickHs.addEventListener("click", () =>
  redirectToUrl("/account/information")
);

const logoClickHs = document.querySelector(".logo-click-hs");
logoClickHs.addEventListener("click", () => redirectToUrl("/"));
