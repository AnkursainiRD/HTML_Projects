var adminId=document.getElementById("adminid").value;
var adminPass=document.getElementById("adminpassword").value;
var adminLogin=document.querySelector("#adminlogin")

adminLogin.addEventListener("click",function(){
    if(adminId==="Ankur")
    {
        if(adminPass==="ak"){
            window.location.href("http://127.0.0.1:5500/Project_8/adminPage.html")
        }
        else{
            alert("Invalid Password")
        }
    }
})