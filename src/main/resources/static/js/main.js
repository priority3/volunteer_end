var datas = [{
    num: '001',
    name: '张三',
    age: 18,
    sex: '男',
    phone: 123123
}, {
    num: '002',
    name: '李四',
    age: 34,
    sex: '男',
    phone: 14564623
}, {
    num: '003',
    name: '王五',
    age: 54,
    sex: '女',
    phone: 675657
}, {
    num: '004',
    name: '赵六',
    age: 23,
    sex: '男',
    phone: 53643
}];

var messages = [{
    num: '001',
    time: '2002.1.1',
    thing: '植树节'
}]
//-----------------获取添加页面的人员信息-----------------
var params = location.search.substring(1);
var arr = params.split('&');
if (arr.length == 5) {
    var arr1 = arr[0].split('=');
    var newnum = arr1[1];
    var arr2 = arr[1].split('=');
    var newname = arr1[1];
    var arr3 = arr[2].split('=');
    var newage = arr1[1];
    var arr4 = arr[3].split('=');
    var newsex = arr1[1];
    var arr5 = arr[4].split('=');
    var newphone = arr1[1];
    datas.push({ newnum, newname, newage, newsex, newphone });
}
//------------------获取新的活动信息------------------------
if (arr.length == 3) {
    var arr1 = arr[0].split('=');
    var newnum = arr1[1];
    var arr2 = arr[1].split('=');
    var newtime = arr1[1];
    var arr3 = arr[2].split('=');
    var newmessage = arr1[1];
    messages.push({ newnum, newtime, newmessage });
}
//-------------------增加人员信息---------------------
var tbody = document.querySelector('tbody');
for (var i = 0; i < datas.length; i++) {
    var tr = document.createElement('tr');
    tbody.insertBefore(tr, tbody[0]);

    for (var k in datas[i]) {
        var td = document.createElement('td');
        td.innerHTML = datas[i][k];
        tr.appendChild(td);
    }
    var td = document.createElement('td');
    td.innerHTML = `<button dataId=${datas[i].num}>删除</button>`;
    tr.appendChild(td);
}

var as = document.querySelectorAll('a');
for (var i = 0; i < as.length; i++) {
    as[i].onclick = function () {
        tbody.removeChild(this.parentNode.parentNode);
    }
}
//-------------------增加活动日记-------------------
var tbody1 = document.querySelector('.second');
for (var i = 0; i < messages.length; i++) {
    var tr = document.createElement('tr');
    tbody1.insertBefore(tr, tbody1[0]);

    for (var k in messages[i]) {
        var td = document.createElement('td');
        td.innerHTML = messages[i][k];
        tr.appendChild(td);
    }
    var td = document.createElement('td');
    td.innerHTML = '<button>删除</button>';
    tr.appendChild(td);
}

var as = document.querySelectorAll('a');
for (var i = 0; i < as.length; i++) {
    as[i].onclick = function () {
        tbody1.removeChild(this.parentNode.parentNode);
    }
}
//----------------------页面隐藏及显示-----------------------
var page1 = document.querySelector('.page1');
var page2 = document.querySelector('.page2');
var pages1 = document.querySelector('.pages1');
var pages2 = document.querySelector('.pages2');
var message = document.querySelector('.new');
page1.onclick = function () {
    pages1.className = 'w pages1';
    pages2.className = 'w pages2 none';
    message.innerHTML = '有新志愿者加入，去<a href="newperson.html">添加</a>'
}
page2.onclick = function () {
    pages1.className = 'w pages1 none';
    pages2.className = 'w pages2';
    message.innerHTML = '活动日志改变，去<a href="newmessage.html">修改</a>'
}