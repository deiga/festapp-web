
/*================================================================
=>                  Controller = Events
==================================================================*/
/*global app*/

app.controller('EventsCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {

	'use strict';

	console.log('Controller ===  EventsCtrl');

    var baseEvents = Restangular.all('events');

    baseEvents.getList().then(function (events) {
        $scope.allEvents = events;
    });

}]);


/*-----  End of Controller = Events  ------*/



