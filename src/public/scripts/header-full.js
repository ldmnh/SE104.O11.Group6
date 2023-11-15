function redirectToUrl(url) {
    window.location.href = url;
}

// Header-full
const homepageBtnHf = document.querySelector("#homepage-btn-hf");
const notiBtnHf = document.querySelector(".noti-btn-hf");
const signinBtnHf = document.querySelector(".signin-btn-hf");
const signupBtnHf = document.querySelector(".signup-btn-hf");
const logoClickHf = document.querySelector(".logo-click-hf");

homepageBtnHf.addEventListener("click", () => redirectToUrl("/"));
notiBtnHf.addEventListener("click", () =>
    redirectToUrl("/notification/account-update")
);
// signinBtnHf.addEventListener("click", () => redirectToUrl("/auth/login"));
// signupBtnHf.addEventListener("click", () => redirectToUrl("/auth/register"));

logoClickHf.addEventListener("click", () => redirectToUrl("/"));

//

const nameClickHf = document.querySelector(".name-click-hf");
const avatarClickHf = document.querySelector(".avatar-click-hf");
nameClickHf.addEventListener("click", () =>
    redirectToUrl("/account/information")
);
avatarClickHf.addEventListener("click", () =>
    redirectToUrl("/account/information")
);

