angular.module('app.controllers', [])

    .controller('pickYourAdventureCtrl', function ($scope) {

    })

    .controller('homeCtrl', function ($scope) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>inside HOME PAGE");

    })

    .controller('adventureDetailsCtrl', function ($scope) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>inside ADVENTURE DETAILS");

    })

    .controller('selectDateCtrl', function ($scope) {
        $('.collapsible').collapsible(); /*IMPORTANT*/

        console.log(">>>>>>>>>>>>>>>>>>>>>>inside SELECT DATE");
        var todaySoldOut = true;
        if (todaySoldOut) {
            document.getElementById("todayarea").innerHTML = '<div class="sold-out"><p style="text-align:center;">Sorry we are fully booked for today</p><br><h1 class="button button-icon icon ion-android-sad" style="margin-left: 46%;margin-top: -9.8%;"></h1></div>';
        }
        /*var but = "",
            button,
            j = 1,
            i,
            but2 = '<a href="#/your-details" class="button round"></a>';

        var loopy = function () {
          for (i = today; i < 1; i--) {
                alert("today = " + today + "||i=" + i + "||j=" + j + "but=" + but);
                but = but.concat(but2);
                docunt.getElementById("today-area").innerHTML = '<ticket-button></ticket-button>';
            }
        };*/


        /*else if (today < 6) {

        loopy();

    } else {
        alert("problem hai boss");
    }


*/

    })




    .controller('yourDetailsCtrl', function ($scope) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>inside YOUR DETAILS");
        document.getElementById("tot").innerHTML = localStorage.noOfTicketsSelected;
        localStorage.getItem("user");
        console.log(userData.name);
        document.getElementById("ticketdate").innerHTML = "Date : " + localStorage.ticketDate;
        console.log("ticketDate is" + localStorage.ticketDate);
    })





    .controller('orderSummaryCtrl', function ($scope) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>inside ORDER SUMMARY");
        console.log("ticket date is " + localStorage.ticketDate);
        document.getElementById("ticketdate2").innerHTML = localStorage.ticketDate.substring(0, 8) + " @9:30 am";

        document.getElementById("cusName").innerHTML = localStorage.cusName;
        document.getElementById("showTic2").innerHTML = localStorage.noOfTicketsSelected;
        var total = localStorage.noOfTicketsSelected * 2500;
        console.log("total is " + total);
        document.getElementById("totalAmt").innerHTML = "Total  ₹ " + localStorage.noOfTicketsSelected * 2500;
    })




    .controller('bookingSuccessfulCtrl', function ($scope) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>inside BOOKING SUCCESSFUL");

        console.log("inside booking successful");
        document.getElementById("ticketdate3").innerHTML = localStorage.ticketDate + " @9:30 am";
        document.getElementById("noOfTickets").innerHTML = localStorage.noOfTicketsSelected;
        document.getElementById("insertEmail").innerHTML = localStorage.cusEmail;


    })

    .controller('signUpCtrl', function ($scope) {

    })

    .controller('signInCtrl', function ($scope) {

    })

    .controller('forgotPasswordCtrl', function ($scope) {

    })

    .controller('huntFactorIndexCtrl', function ($scope) {

    })