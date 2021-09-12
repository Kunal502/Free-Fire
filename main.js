function sub(){
    Name=document.getElementById("name").value;
    Email=document.getElementById("Email").value;
    Password=document.getElementById("Password").value;

    localStorage.setItem("Name" , Name);
    localStorage.setItem("Email" , Email);
    localStorage.setItem("Password" , Password );

}