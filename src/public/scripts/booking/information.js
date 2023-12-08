const form = document.querySelector('form[action="/booking/information"]');

const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

const validatePhone = (phone) => {
    const phonePattern = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
    return phonePattern.test(phone);
}

const validateForm = () => {
    inputs = form.querySelectorAll('input[required]');
    values = [...inputs].map(input => input.value);
    const res = values?.every(value => value);
    const submitBtn = form.querySelector('[type="button"]');

    if (!!res) {
        submitBtn.style.backgroundColor = 'orange';
        submitBtn.disabled = false;
    } else {
        submitBtn.style.backgroundColor = 'gray';
        submitBtn.disabled = true;
    }

    return values?.every(value => value);
}

validateForm();
form?.querySelectorAll('input[required]').forEach(input => {
    input.addEventListener('input', validateForm);
    input.setCustomValidity('');
})

form?.querySelector('button[type="button"]')?.addEventListener('click', (e) => {
    const email = form.querySelector('.form--item input[name="email"]');
    console.log('email', email.value);
    const phone = form.querySelector('.form--item input[name="phone"]');
    console.log('phone', phone.value);

    if (!validateEmail(email?.value)) {
        email.setCustomValidity('Email không hợp lệ');
    } else {
        email.setCustomValidity('');
    }

    if (!validatePhone(phone?.value)) {
        phone.setCustomValidity('Số điện thoại không hợp lệ');
    } else {
        phone.setCustomValidity('');
    }

    email.reportValidity();
    phone.reportValidity();

    if (form.checkValidity()) {
        form.submit();
    }
})