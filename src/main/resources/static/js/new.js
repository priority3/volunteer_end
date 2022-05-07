var inputs = document.querySelector('.reg_form').querySelectorAll('input');
var btn = document.querySelector('.btn');
window.onload = function () {
    btn.disabled = true;
    btn.previousElementSibling.onmouseout = function () {
        var flag = false;
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value == '') {
                flag = true;
            }
        }
        btn.disabled = flag;
        console.log(flag);
    }
}