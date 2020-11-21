app.controller('LearnAndTestAngularjs', function ($scope, $http, $log, $filter) {
    console.log($log);
    $log.log('Hêllo');
    $log.warn('Meow');

    console.log($http);
    console.log($scope);
    console.log($filter);

})