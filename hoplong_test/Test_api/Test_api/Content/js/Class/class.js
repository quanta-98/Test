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
    $scope.ViewDetail = function (userid) {
        $http.get('http://10.10.15.162:3001/person/' + userid).then(function (response) {
            $scope.detailStudent = response.data
        })
    }

    //Sửa thông tin sinh viên
    $scope.EditInfo = function (userid ,Firstname, Lastname) {
        var data = {
            firstname: Firstname,
            lastname: Lastname
        }
        $http.put('http://10.10.15.162:3001/person/' + userid, data).then(function (response) {
            $scope.LoadAllData();
        })
    }


    //Xóa sinh viên
    $scope.DeleteStudent = function (userid) {
        $http.delete('http://10.10.15.162:3001/person/' + userid).then(function (response) {
            $scope.LoadAllData();
        })
    }
})