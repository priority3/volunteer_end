var inputs = document.querySelector('.login_form').querySelectorAll('input');
var btn = document.querySelector('.login_form').querySelector('.btn');
window.onload = function () {
    btn.disabled = true;
    inputs[1].onmouseout = function () {
        if (inputs[0].value == '' || inputs[1].value == '') {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    }
}