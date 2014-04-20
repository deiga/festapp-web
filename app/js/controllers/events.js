
/*================================================================
=>                  Controller = Events
==================================================================*/
/*global app*/

app.controller('EventsCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {

	'use strict';

	console.log('Controller ===  EventsCtrl');

    Restangular.all('festival').getList().then(function (festivals) {
        $scope.festival = festivals[0];
    });

    var baseEvents = Restangular.all('events');

    baseEvents.getList({sort: 'start_time'}).then(function (events) {
        $scope.allEvents = events;
        $scope.upcomingEvents = events.filter(function (event) {
            return new Date(event.start_time) >= Date.now();
        });
    });

    var baseLocations = Restangular.all('locations');

    baseLocations.getList().then(function (locations) {
        $scope.stages = locations.filter(function (location) {
            return location.type === 'STAGE';
        });
    });

}]);


/*-----  End of Controller = Events  ------*/



