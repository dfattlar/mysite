(function () {
    'use strict';

    angular
        .module('app.rr')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun (routehelper){
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/rr',
                config: {
                    title: 'R&R',
                    controller: 'RR',
                    controllerAs: 'vm',
                    templateUrl: 'app/rr/rr.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> R&R'
                    }
                }
            }
        ];
    }
})();