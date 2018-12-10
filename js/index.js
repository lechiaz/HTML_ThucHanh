
var btnSubmit = document.forms['register-form']['btnSubmit'];
btnSubmit.onclick = function () {
    // if (validateForm()) {
    //     // Gửi dữ liệu đi.
    //     doSubmit();
    // }
    doSubmit();
}


function doSubmit() {
    var _name = document.forms['register-form']['name'].value;
    var _email = document.forms['register-form']['email'].value;
    var _phone = document.forms['register-form']['phone'].value;
    var _gender = document.forms['register-form']['gender'].value;
    var _hobby = document.forms['register-form']['gender'].value;
    var _info = document.forms['register-form']['info'].value;
    alert('Họ và tên:' + _name + '\n' + 'Email:' + _email + '\n' + 'Phone:' + _phone + '\n'  +  'Gender:' + _gender + '\n' + 'Hobby:' + _gender + '\n' + 'Info:' + _info);
    document.forms['register-form'].reset();
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
        msgPhone.innerHTML = 'Phone is required!';
        isValidPhone = false;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Ok.';
    }
    // var isValidGender = true;
    // var txtGender = document.forms['register-form']['gender'];
    // var msgGender = txtGender.nextElementSibling;
    // if (txtGender.checked) {
    //     alert('1');
    //     msgGender.classList.remove('msg-success');
    //     msgGender.classList.add('msg-error');
    //     msgGender.innerHTML = 'Gender is required!';
    //     isValidGender = false;
    // } else {
    //     alert('2');
    //     msgGender.classList.remove('msg-error');
    //     msgGender.classList.add('msg-success');
    //     msgGender.innerHTML = 'Ok.';
    // }


    isValid = isValidName && isValidEmail && isValidPhone;
    return isValid;
}