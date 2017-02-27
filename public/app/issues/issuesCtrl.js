/**
 * Created by mlingolu on 2/26/17.
 */


app.controller('IssuesController',['$scope','gitService','$stateParams',function ($scope,gitService,$stateParams) {


    var vm = this;
    vm.issues =[];


    vm.repo = $stateParams.repos || JSON.parse(localStorage.getItem('selectedRepo')) || [];

    localStorage.setItem('selectedRepo',JSON.stringify(vm.repo));

    vm.gitIssues = function () {
        gitService.gitIssues(vm.repo.full_name).then(function (response) {
            vm.issues = response.data;
        })
    }

    vm.gitIssues();

}]);