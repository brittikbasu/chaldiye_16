
var userData = {
name:'myname',
age: 99,
email: 'user@email.com'
};

//console.log(moment().add(1, 'days'));
    moment().format();

    var now = moment();
console.log(now);


localStorage.setItem("user", userData);

var selected = function(sel, day){
var not = sel;
var whichDay = day;
console.log("which day is " +whichDay);
if(whichDay ==='tomorrow'){
  localStorage.ticketDate = "23rd Feb, 2017"
}
else if(whichDay ==='dayAfterTomorrow'){
    localStorage.ticketDate = "24th Feb, 2017"
}
console.log("no of tickets selected is " +not);
localStorage.noOfTicketsSelected = not;
//document.getElementById("showTNO").innerHTML = localStorage.noOfTicketsSelected;
var total = localStorage.noOfTicketsSelected * 2500;
//document.getElementById("tot").innerHTML = localStorage.noOfTicketsSelected * 2500;;

};
var saveDetails = function(){
console.log("inside save details");
  localStorage.cusName = document.getElementById("name").value;
  localStorage.cusTelephone = document.getElementById("tel").value;
  localStorage.cusEmail = document.getElementById("email").value;
  console.log("email is " +localStorage.cusEmail);
console.log("Name "+localStorage.cusName+ " | Tel "+localStorage.cusTelephone+ " | Email " +localStorage.cusEmail);


};

var adventureNA = function(){
    alert("Only Rock Climbing is available in this prototype. It's the one at the top, the first one.");
};

var yourDetils = function(){
  alert("so cool");
};
