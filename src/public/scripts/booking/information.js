const form = document.querySelector('form[action="/booking/information"]');


const validateEmail = (email) => {
    console.log(email);
    const emailPattern = /^[a-zA-Z]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

const validatePhone = (phone) => {
    const phonePattern = /^0\d{9}$/;
    return phonePattern.test(phone);
    // return true;
}

const validateForm = () => {
    inputs = form.querySelectorAll('input[required]');
    console.log(inputs);

    values = [...inputs].map(input => input.value);
    console.log(values);

    const res = values?.every(value => value);

    const submitBtn = form.querySelector('[type="submit"]');
    console.log(submitBtn);

    if (!!res) {
        submitBtn.style.backgroundColor = 'orange';
        submitBtn.disable = false;
    } else {
        submitBtn.style.backgroundColor = 'gray';
        submitBtn.disable = true;
    }

    return values?.every(value => value);
}

validateForm();
form?.querySelectorAll('input[required]').forEach(input => {
    input.addEventListener('input', validateForm);
})

form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.querySelector('.form--item input[name="email"]');
    console.log(email ?? 'email not found');
    const phone = form.querySelector('.form--item input[name="phone"]');
    console.log(phone ?? 'phone not found');

    if (!validateEmail(email?.value)) {
        email.setCustomValidity('Email không hợp lệ');
    } if (!validatePhone(phone?.value)) {
        phone.setCustomValidity('Số điện thoại không hợp lệ');
    } else {
        // alert('Thành công');
        e.target.submit();
    }
})