var app = angular.module("myApp", [])
    .controller('introController', function ($scope) {
        $scope.angularLoaded = "Yeah, man!";

        $scope.niceGrids = function(){

            $.fn.niceGrids();
        };
    });