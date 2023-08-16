var Loguser=document.getElementById("userLog");
var Loginfo=document.getElementById("logInfo");
var BtnreSin=document.getElementById("resBtn");
var allcookies = document.cookie;
BtnreSin.style.display='none';
Loginfo.style.display='inline';
Loguser.innerHTML=allcookies.split("=")[1];