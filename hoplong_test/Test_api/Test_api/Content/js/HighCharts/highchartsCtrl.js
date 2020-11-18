app.controller("HighChartsCtrl", function ($scope, $http) {
    //var today = new Date();
    //var dd = today.getDate();
    //var mm = today.getMonth() + 1;

    //var yyyy = today.getFullYear();
    //if (dd < 10) {
    //    dd = '0' + dd;
    //}
    //if (mm < 10) {
    //    mm = '0' + mm;
    //}
    //var today = dd + '/' + mm + '/' + yyyy;
    //$scope.ngay = today;

    $scope.loadChart = function () {
        var data = {
            //date: $scope.ngay,
            date:'16/11/2020',
            mcid: 1
        }
        $http.post(chartUrl + '/api/Api_Machine/QuantityChart', data).then(function (response) {
            $scope.listChart = response.data;
            Highcharts.chart('container', {
                chart: {

                    type: 'column',
                },
                title: {
                    text: 'Solar Employment Growth by Sector, 2010-2016'
                },

                subtitle: {
                    text: 'Bieu DO TEST'
                },

                yAxis: {
                    title: {
                        text: 'Number of Employees'
                    }
                },

                xAxis: {
                    categories: ["06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", ],

                },

                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },



                series: [{
                    name: $scope.listChart[0].name,
                    data: $scope.listChart[0].data,
                }],


            });
        });

    }
    $scope.loadChart(); //goi ra luon
})
