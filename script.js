console.log("here")
function myfunc(event){

    event.preventDefault();
    var full_name=document.getElementById("name").value;
   
    
    var founder_linkedin=document.getElementById("found-link").value;
    var startup_linkedin=document.getElementById("start-link").value;
    var brief=document.getElementById("brief").value;
    var startup=document.getElementById("startup").value;
    var contact_num=document.getElementById("num").value;
    var contact_email=document.getElementById("email").value;
    var temp_stu=document.getElementById("stu");
    //temp_stu.checked? stu="YES":stu="NO";
    localStorage.setItem("Full Name",full_name);
    localStorage.setItem("Founder linkedin account",founder_linkedin);
    localStorage.setItem("Startup linkedin account",startup_linkedin);
    localStorage.setItem("Brief about startup",brief);
    localStorage.setItem("Contact Email",contact_email);
    localStorage.setItem("Contact Number",contact_num);
    localStorage.setItem("Name of Startup",startup);
    
    console.log(localStorage);
}