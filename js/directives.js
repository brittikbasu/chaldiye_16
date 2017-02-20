angular.module('app.directives', [])

.directive('blankDirective', [function () {

}])

.directive('ticketButton', [function () {
    return {
        template: '<div class="available padding"><div class="flow-text assertive">Only ' + today + 'tickets left!</div><div class="no-of-tickets-button">' + but + '</div>'
    }

}])


.directive('sold', function () {
    return {
        template: '<div class="sold-out"><p>Sorry we are fully booked for today:(</p></div>'
    };
     

});
