function redirectToUrl(url) {
     window.location.href = url;
}

// Header-medium
const logoClickHm = document.querySelector(".logo-click-hm");

const homepageBtnHm = document.querySelector(".homepage-btn-hm");
const notiBtnHm = document.querySelector(".noti-btn-hm");

logoClickHm.addEventListener("click", () => redirectToUrl("/"));

homepageBtnHm.addEventListener("click", () => redirectToUrl("/"));
notiBtnHm.addEventListener("click", () =>
     redirectToUrl("/notifications/account-update")
);

const nameClickHm = document.querySelector(".name-btn-hm");
const avatarClickHm = document.querySelector(".avatar-btn-hm");

nameClickHm.addEventListener("click", () =>
     redirectToUrl("/account/information")
);
avatarClickHm.addEventListener("click", () =>
     redirectToUrl("/account/information")
);
