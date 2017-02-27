/**
 * Created by mlingolu on 2/26/17.
 */


app.controller('ReposController',['$scope','gitService','$state','$stateParams',function ($scope,gitService,$state,$stateParams) {


    var vm = this;

    vm.repos = $stateParams.repos || JSON.parse(localStorage.getItem('repos')) || [];

    localStorage.setItem('repos',JSON.stringify(vm.repos));

    vm.goToIssues = function (issues) {
        $state.go('issues');
    }

}]);