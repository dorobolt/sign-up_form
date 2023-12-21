const pass = document.querySelector('#password');
const conf = document.querySelector('#confirm');
const same = document.querySelector('#same');
const submit = document.querySelector('#signbutton')

function samePassword() {
    if (pass.value === conf.value) {
        same.textContent = '';
        submit.disabled = false
    }
    else {
        same.textContent = '*Password do not match';
        submit.disabled = true
    }
}

pass.addEventListener('input', function () {
    samePassword();
});
conf.addEventListener('input', function () {
    samePassword();
});