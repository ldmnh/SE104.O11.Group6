const editProfile = $("#edit-profile");
const viewProfile = $("#view-profile");

const showEditProfile = () => {
    editProfile[0].style.display = "block";
    viewProfile[0].style.display = "none";
}

const showViewProfile = () => {
    editProfile[0].style.display = "none";
    viewProfile[0].style.display = "block";
}

showViewProfile();

$('.form__btn--edit')[0].addEventListener('click', (event) => {
    event.preventDefault();
    showEditProfile();
});

$('.form__btn--cancel')[0].addEventListener('click', (event) => {
    event.preventDefault();
    showViewProfile();
});

const formBtn__save = $('.form__btn--save')[0];
formBtn__save.addEventListener('click', (event) => {
    event.preventDefault();
    form = $(formBtn__save.dataset.formId)[0];

    form.submit();
});

