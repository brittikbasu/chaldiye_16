angular.module('app.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



        .state('pickYourAdventure', {
        url: '/adventure',
        templateUrl: 'templates/pickYourAdventure.html',
        controller: 'pickYourAdventureCtrl'
    })





    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    })





    .state('adventureDetails', {
        url: '/adventure-details',
        templateUrl: 'templates/adventureDetails.html',
        controller: 'adventureDetailsCtrl'
    })





    .state('selectDate', {
        url: '/select-date',
        templateUrl: 'templates/selectDate.html',
        controller: 'selectDateCtrl'
    })





    .state('yourDetails', {
        url: '/your-details',
        templateUrl: 'templates/yourDetails.html',
        controller: 'yourDetailsCtrl'
    })





    .state('orderSummary', {
        url: '/order-summary',
        templateUrl: 'templates/orderSummary.html',
        controller: 'orderSummaryCtrl'
    })





    .state('bookingSuccessful', {
        url: '/booking-successful',
        templateUrl: 'templates/bookingSuccessful.html',
        controller: 'bookingSuccessfulCtrl'
    })





    .state('signUp', {
        url: '/sign-up',
        templateUrl: 'templates/signUp.html',
        controller: 'signUpCtrl'
    })





    .state('signIn', {
        url: '/sign-in',
        templateUrl: 'templates/signIn.html',
        controller: 'signInCtrl'
    })





    .state('forgotPassword', {
        url: '/page14',
        templateUrl: 'templates/forgotPassword.html',
        controller: 'forgotPasswordCtrl'
    })





    .state('huntFactorIndex', {
        url: '/page15',
        templateUrl: 'templates/huntFactorIndex.html',
        controller: 'huntFactorIndexCtrl'
    })


    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');

});
