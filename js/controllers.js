angular.module('app.controllers', [])

    .controller('pickYourAdventureCtrl', function ($scope) {

            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-42932342-2', 'auto');
  ga('send', 'pageview');

    })

    .controller('homeCtrl', function ($scope) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>inside HOME PAGE");

            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-42932342-2', 'auto');
  ga('send', 'pageview');


    })

    .controller('adventureDetailsCtrl', function ($scope) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>inside ADVENTURE DETAILS");

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-42932342-2', 'auto');
  ga('send', 'pageview');

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

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-42932342-2', 'auto');
  ga('send', 'pageview');

    })




    .controller('yourDetailsCtrl', function ($scope) {
    

        console.log(">>>>>>>>>>>>>>>>>>>>>>inside YOUR DETAILS");
        document.getElementById("tot").innerHTML = localStorage.noOfTicketsSelected;
        localStorage.getItem("user");
        console.log(userData.name);
        document.getElementById("ticketdate").innerHTML = "Date : " + localStorage.ticketDate;
        console.log("ticketDate is" + localStorage.ticketDate);

            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-42932342-2', 'auto');
  ga('send', 'pageview');

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
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-42932342-2', 'auto');
  ga('send', 'pageview');   

 })




    .controller('bookingSuccessfulCtrl', function ($scope) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>inside BOOKING SUCCESSFUL");

        console.log("inside booking successful");
        document.getElementById("ticketdate3").innerHTML = localStorage.ticketDate + " @9:30 am";
        document.getElementById("noOfTickets").innerHTML = localStorage.noOfTicketsSelected;
        document.getElementById("insertEmail").innerHTML = localStorage.cusEmail;

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-42932342-2', 'auto');
  ga('send', 'pageview');

    })

    .controller('signUpCtrl', function ($scope) {

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-42932342-2', 'auto');
  ga('send', 'pageview');

    })

    .controller('signInCtrl', function ($scope) {

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-42932342-2', 'auto');
  ga('send', 'pageview');

    })

    .controller('forgotPasswordCtrl', function ($scope) {

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-42932342-2', 'auto');
  ga('send', 'pageview');

    })

    .controller('huntFactorIndexCtrl', function ($scope) {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-42932342-2', 'auto');
  ga('send', 'pageview');
    })