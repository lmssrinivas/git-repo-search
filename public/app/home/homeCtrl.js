/**
 * Created by mlingolu on 2/26/17.
 */


app.controller('HomeController',['$scope','gitService','$state',function ($scope,gitService,$state) {


    var vm = this;
    
    vm.searchRepos= function () {

        gitService.getrepos(vm.searchKey).then(function (response) {
            $state.go('repos',{repos: response.data});
        })
    }
}]);