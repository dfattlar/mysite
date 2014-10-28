(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$q'];

    /* @ngInject */
    function dataservice($q) {
        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount,
            getRunTypes: getRunTypes
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            var people = [
                { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
                { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
                { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
                { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
                { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
                { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
                { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
            ];
            return $q.when(people);
        }
      
        function getRunTypes(){
          var races = [
            {
              name:'5k',
              distance: 3.10686,
              rows:[ 
                {mile: '1', note:''},
                {mile: '2', note:''},
                {mile: '3', note:''},
                {mile: '3.1', note:''}
              ]
            },
            {
              name:'8k',
              distance: 4.97097,
              rows:[ 
                {mile: '1', note:''},
                {mile: '2', note:''},
                {mile: '3', note:''},
                {mile: '4', note:''},
                {mile: '4.9', note:''}
              ]
            },
            {
              name:'10k',
              distance: 6.21371,
              rows: [ 
                {mile: '1', note:''},
                {mile: '2', note:''},
                {mile: '3', note:''},
                {mile: '4', note:''},
                {mile: '5', note:''},
                {mile: '6', note:''},
                {mile: '6.2', note:''}
              ]          
            },
            {
              name:'Half Marathon',
              distance: 13.10938,
              rows: [ 
                {mile: '1', note:''},
                {mile: '2', note:''},
                {mile: '3', note:''},
                {mile: '4', note:''},
                {mile: '5', note:''},
                {mile: '6', note:''},
                {mile: '7', note:''},
                {mile: '8', note:''},
                {mile: '9', note:''},
                {mile: '10', note:''},
                {mile: '11', note:''},
                {mile: '12', note:''},
                {mile: '13', note:''},
                {mile: '13.1', note:''}
              ]      
            },
            {
              name:'Marathon',
              distance: 26.21875,
              rows: [ 
                {mile: '1', note:''},
                {mile: '2', note:''},
                {mile: '3', note:''},
                {mile: '4', note:''},
                {mile: '5', note:''},
                {mile: '6', note:''},
                {mile: '7', note:''},
                {mile: '8', note:''},
                {mile: '9', note:''},
                {mile: '10', note:''},
                {mile: '11', note:''},
                {mile: '12', note:''},
                {mile: '13', note:''},
                {mile: '14', note:''},
                {mile: '15', note:''},
                {mile: '16', note:''},
                {mile: '17', note:''},
                {mile: '18', note:''},
                {mile: '19', note:''},
                {mile: '20', note:''},
                {mile: '21', note:''},
                {mile: '22', note:''},
                {mile: '23', note:''},
                {mile: '24', note:''},
                {mile: '25', note:''},
                {mile: '26', note:''},
                {mile: '26.2', note:''}
              ]
            }];
          return $q.when(races);
        }
    }
})();