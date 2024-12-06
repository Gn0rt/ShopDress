const name = document.querySelector('.fullName');
const phone = document.querySelector('.numberPhone');
const addr = document.querySelector('.address');
const className = 'js-inp-check'; s
function checkInput(variable, type) {
    val = variable.value;
    var phoneRegex = /^\d{10}$/;

    if (type === 'text' && val.trim() === '') {
        variable.classList.add(className);
    }
    else if (type === 'number') {
        if ((isNaN(val)) || val.trim() === '' || !phoneRegex.test(val)) {
            variable.classList.add(className);
        } else {
            variable.classList.remove(className);
        }
    }
    else {
        variable.classList.remove(className);
    }
}
name.addEventListener('blur', function () {
    checkInput(name, 'text');
});
phone.addEventListener('blur', function () {
    checkInput(phone, 'number');
});
addr.addEventListener('blur', function () {
    checkInput(addr, 'text');
});


function validate() {
    const name = document.querySelector('.fullName');
    const phone = document.querySelector('.numberPhone');
    const addr = document.querySelector('.address');

    const phoneRegex = /^\d{10}$/;
    const isNameValid = name.value;
    const isPhoneValid = phoneRegex.test(phone.value);
    const isAddressValid = addr.value;

    if (isNameValid.trim() === '' || !isPhoneValid || isAddressValid.trim() === '') {
        alert("Bạn cần nhập đủ thông tin");
    } else {
        alert("Bạn đã thuê thành công! Chúc bạn một ngày vui vẻ ^^!");
    }
}