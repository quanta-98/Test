app.controller('ClassCtrl', function ($scope, $http) {
    //Load Full Data
    $scope.LoadAllData = function () {
        $http.get('http://10.10.15.162:3001/people').then(function (response) {
            $scope.listData = response.data;
        })
    }
    $scope.LoadAllData();

    // Thêm data
    $scope.AddPeople = function (Firstname, Lastname) {
        var data = {
            firstname: Firstname,
            lastname: Lastname
        }
        $http.post('http://10.10.15.162:3001/person', data).then(function (response) {
            SuccessSystem('thành công');
            $scope.LoadAllData();
        })
    }

    //Xem chi tiết học sinh theo Id
    $scope.ViewDetail = function () {
        $http.get('http://10.10.15.162:3001/person/')
    }
})