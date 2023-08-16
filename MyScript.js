var username=document.getElementById("clientName")
var email=document.getElementById("clientEmail");
var password=document.getElementById("clientPassword");
var copassword=document.getElementById("confirmPassword");
var form=document.getElementById("clientForm");
var massegErro=document.getElementById("checkform");
var Loginfo=document.getElementById("userLog");
var LogD=document.getElementById("LogInfo");
var userLoginfo=document.getElementById("LoginUser");
var testUser=new RegExp(/^[a-z]{3,}\w*/i);
var testMail=new RegExp("^[a-z|\.]+.*\@(gmail|yahoo|)\.(com)$");
var testPass=new RegExp(/(?=.{5,})/);
function storeData(){

}
function checkData(){
    var userDataSave=new Array();
    var userNm=username.value;
    var Mail=email.value;
    
    var pWrod=password.value;
    var cWord=copassword.value;
    
    if(localStorage.getItem("user"))
    {
        userDataSave=JSON.parse(localStorage.getItem("user"));
    }
    if(Mail===''||!testMail.test(Mail))
    {
        email.focus()
        
        massegErro.innerHTML ="in valid Email";
       
        email.value="";
        email.placeholder="in valid mail"
    }
    else if(userDataSave.some((v)=>{return v.email==Mail})){
    
        email.focus()
        massegErro.innerHTML ="email Arrady exist";
        
        email.value="";
        email.placeholder="this mail is found"
        

    
     }
   else if(userNm===''||!testUser.test(userNm)){
            username.focus();
            username.value="";
            username.placeholder="inviald user name";
            massegErro.innerHTML ="invaild username";
    
        }
  
     else if( pWrod===' '||cWord===''||!testPass.test(pWrod)|| pWrod!==cWord){
         password.focus();
         password.value="";
         password.placeholder="password and confirm not match";
    }
   else{
    userDataSave.push({
        "username":userNm,
        "email":Mail,
        "password":pWrod,
    })
    localStorage.setItem("user",JSON.stringify(userDataSave));
   Loginfo.style.visibility='visible'
   LogInfo.style.di
   Loginfo.innerHTML=userNm;
   
     window.location='Login.html';
   }
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkData()

});


