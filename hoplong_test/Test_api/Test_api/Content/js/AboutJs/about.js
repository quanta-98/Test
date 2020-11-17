app.controller('AboutCtrl', function ($scope, $http) {
    // load danh sách nhân viên, lọc theo tên phòng ban
    $scope.LoadListEmployee = function (maphong) {
        var data = {
            isadmin: false,
            maphongban: maphong,
            macongty: 'HOPLONG'
        }
        $http.post('http://sales.hoplong.com/api/Api_NhanVien/NhanVienPhongBan',data).then(function (response) {
            $scope.listEmployee = response.data;
        })
    }
    $scope.LoadListEmployee();

    // xem chi tiết nhân viên
    $scope.ViewDetailEmployee = function (username) {
        $http.get('http://sales.hoplong.com/api/Api_NhanVien/GetChiTietNhanVien/' + username).then(function (response) {
            $scope.viewDetailEmployee = response.data;
            console.log($scope.viewDetailEmployee);
        })
    }
})