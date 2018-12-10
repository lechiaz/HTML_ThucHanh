
var btnSubmit = document.forms['register-form']['btnSubmit'];
btnSubmit.onclick = function () {
    if (validateForm()) {
        // Gửi dữ liệu đi.
        doSubmit();
    }
}


function doSubmit() {
    var _name = document.forms['register-form']['name'].value;
    var _email = document.forms['register-form']['email'].value;
    var _phone = document.forms['register-form']['phone'].value;
}

function validateForm() {
    var isValid = true;

    var isValidName = true;
    var txtName = document.forms['register-form']['name'];
    var msgName = txtName.nextElementSibling;
    if (txtName.value == null || txtName.value.length == 0) {
        msgName.classList.remove('msg-success');
        msgName.classList.add('msg-error');
        msgName.innerHTML = 'Name is required!';
        isValidName = false;
    } else {
        msgName.classList.remove('msg-error');
        msgName.classList.add('msg-success');
        msgName.innerHTML = 'Ok.';
    }

    var isValidEmail = true;
    var txtEmail = document.forms['register-form']['email'];
    var msgEmail = txtEmail.nextElementSibling;
    if (txtEmail.value == null || txtEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email is required!';
        isValidEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Ok.';
    }

    var isValidPhone = true;
    var txtPhone = document.forms['register-form']['phone'];
    var msgPhone = txtPhone.nextElementSibling;
    if (txtPhone.value == null || txtPhone.value.length == 0) {
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Email is required!';
        isValidPhone = false;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Ok.';
    }


    isValid = isValidName && isValidEmail && isValidPhone;
    return isValid;
}