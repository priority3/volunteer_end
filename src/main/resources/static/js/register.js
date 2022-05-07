var is = document.querySelector('.reg_form').querySelectorAll('i');
var spans = document.querySelector('.reg_form').querySelectorAll('span');
var inputs = document.querySelector('.reg_form').querySelectorAll('input');
var ruo = document.querySelector('.ruo');
var zhong = document.querySelector('.zhong');
var qiang = document.querySelector('.qiang');
inputs[0].onblur = function () {
    if (this.value.length < 4 || this.value.length > 8) {
        spans[0].innerHTML = '用户名格式不正确，要求4~8位，请重新输入!';
        spans[0].className = 'error';
        is[0].className = 'error_icon';
    } else {
        spans[0].innerHTML = '用户名符合要求！';
        spans[0].className = 'success';
        is[0].className = 'success_ico';
    }
}

inputs[1].onblur = function () {
    if (this.value.length < 6 || this.value.length > 18) {
        spans[1].innerHTML = '您输入的位数不对，要求6~18位密码!';
        spans[1].className = 'error';
        is[1].className = 'error_icon';
        ruo.className = 'ruo';
        qiang.className = 'qiang';
        zhong.className = 'zhong';
    } else if (this.value.length < 10) {
        spans[1].innerHTML = '密码符合要求！';
        spans[1].className = 'success';
        is[1].className = 'success_ico';
        zhong.className = 'zhong block';
        qiang.className = 'qiang block';
    } else if (this.value.length < 14) {
        spans[1].innerHTML = '密码符合要求！';
        spans[1].className = 'success';
        is[1].className = 'success_ico';
        zhong.className = 'zhong';
        ruo.className = 'ruo block';
        qiang.className = 'qiang block';
    } else {
        spans[1].innerHTML = '密码符合要求！';
        spans[1].className = 'success';
        is[1].className = 'success_ico';
        qiang.className = 'qiang';
        ruo.className = 'ruo block';
        zhong.className = 'zhong block';
    }
}

inputs[2].onblur = function () {
    if (this.value !== inputs[1].value) {
        spans[2].innerHTML = '您输入的密码与第一次的密码不同!';
        spans[2].className = 'error';
        is[2].className = 'error_icon';
    } else {
        spans[2].innerHTML = '两次密码相同！';
        spans[2].className = 'success';
        is[2].className = 'success_ico';
    }
}
//-----------------------验证是否勾选协议，并验证表单是否完全-------------------------
var agree = document.querySelector('.agree').querySelector('input');
var btn = document.querySelector('.btn');
window.onload = function () {
    btn.disabled = true;
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].onmouseout = function () {
            var flag = false;
            if (inputs[0].value.length < 4 || inputs[0].value.length > 8) {
                flag = true;
            }
            if (inputs[1].value.length < 6 || inputs[1].value.length > 18) {
                flag = true;
            }
            if (inputs[2].value.length < 6 || inputs[2].value.length > 18) {
                flag = true;
            }
            if (inputs[2].value !== inputs[1].value) {
                flag = true;
            }
            if (btn.checked) {
                flag = true;
            }
        }
    }
}