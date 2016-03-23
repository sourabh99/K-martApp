/**
 * Created by Sourabh on 3/22/2016.
 */
(function() {

    angular.module('KmartApp', ['ngRoute']).config(moduleConfig);

    function moduleConfig($routeProvider) {
        $routeProvider

            .when('/yourdeals', {
                templateUrl: 'YourDealsTemplate.html',
                controller: 'DealsCtrl',
                controllerAs: 'dlsctrl',

            })
            .when('/saveddeals', {
                templateUrl: 'SavedDealsTemplate.html',
                controller: 'SavedDealsCtrl',
                controllerAs: 'sdlsctrl',
            })
            .otherwise({
                redirectTo: '/yourdeals'
            });
        ;

    }

})();