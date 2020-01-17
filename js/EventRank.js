angular.module('SGT', ['ngSanitize']).controller('VipRankInfo', function ($scope, $http) {

    $scope.VipRankModule = function (t) {
        $scope.RankInfoUrl = 'js/rank.json';

        $.ajax($scope.RankInfoUrl, {
            async: false,
            type: "get",
            dataType: "json"
        }).done(function (data) {
            $scope.RankInfo = data;
        }).fail(function (e) {
            console.log(e);
        })


    }

});
