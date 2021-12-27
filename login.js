var attempt = 3; 
function validate(){
var username = document.getElementById("Username").value;
var password = document.getElementById("Password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "index.html"; 
return false;
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("Username").disabled = true;
document.getElementById("Password").disabled = true;
document.getElementById("Login").disabled = true;
return false;
}
}
}