var Email = document.getElementById("clientEmail");
var passWord = document.getElementById("clientPassword");
var btnSignIn = document.getElementById("clientForm");
var massegErro = document.getElementById("checkform");
var userDataSave = new Array();
var d = new Date();
d.setDate(d.getDate() + 1);
function checkData() {
    var data;

    var eMail = Email.value;
    var passWd = passWord.value;
    if (localStorage.getItem("user")) {
        userDataSave = JSON.parse(localStorage.getItem("user"));
        data = userDataSave.find((v) => { return v.email == eMail && v.password == passWd });

    }
    if (eMail === '' || passWd == '') {
        massegErro.innerHTML = "invaild Input";
    }
    else if (!userDataSave.some((v) => { return v.email == eMail })) {
        massegErro.innerHTML = "emai not Found";
    }
    else if (!userDataSave.some((v) => { return v.password == passWd })) {
        massegErro.innerHTML = "wrong password";
    }
    else {

        document.cookie = "name=" + data.username + ";expires=" + d.toUTCString();
        console.log(data.username);
        window.location = "index.html";




    }


}
btnSignIn.addEventListener('submit', function (e) {
    e.preventDefault();
    checkData();

});
