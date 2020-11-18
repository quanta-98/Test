var app = angular.module('myApp', []);

var chartUrl = 'https://wise-mochizuki.hoplongtech.com/'

function SuccessSystem(errorString) {
    new PNotify({
        title: 'Thành Công',
        text: errorString,
        addclass: 'bg-primary',
        delay: 5000
    });
}