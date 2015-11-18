/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var monthArray = [ "January", "February", "March", "April", "May", "June", "July"
    , "August", "September", "October", "November", "December"];

window.onload = function() {
 // alert( "DEBUG screen size is: " +document.documentElement.clientWidth);
 displayDate("class", "cdate");
 document.getElementById("btnLogin").onclick = function() {  validLoginInput();  };
 
};

function validLoginInput() {
    var p = document.getElementById("password");
    var reqExpr = "/\w+";
    
    alert( "DEBUG radio Check Password value " +document.getElementById("checkPasswd").value  ); 
    if ( document.getElementById("checkPasswd").value === "has_password" ) {
        p.attribute.required = "required";
        alert("Debug password is required");
    }
    
    if ( ! p.test(reqExpr) ) {
        p.value = "";
        alert("Debug Password not valid");
    }
 } // end validLoginInput

function displayDate(attr_type, id) {
  var date = new Date();
  var h = undefined;
  switch (attr_type) {
    case "id": 
        h = document.getElementById(id); break;
    case "class" :
        h = document.getElementsByClassName(id)[0]; break;
    
    } // end switch
    if ( h !== undefined ) {
        h.innerHTML = monthArray[date.getMonth()] + " ";
        h.innerHTML += date.getDay() + ", ";
        h.innerHTML += date.getFullYear() + " ";
        h.innerHTML += timeFormat(date.getHours(), date.getMinutes());
        
    }
} // end displayDateById

function timeFormat(h, m) {
    if ( h === 00 ) {
        return "12:" + m + " AM";
    }
    else if (h >= 1 && h < 12 ) {
        return h + ":" + m + " AM";
    }
    else if ( h === 12 ) {
        return 12+ ":" + m + " PM";
    }
    else 
        return (h - 12) + ":" + m + " PM";
} // timeFormat


