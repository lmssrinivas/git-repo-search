/**
 * Created by mlingolu on 2/26/17.
 */


app.controller('HomeController',['$scope','gitService','$state','smsService',function ($scope,gitService,$state,smsService) {


    var vm = this;
    
    vm.messageData={};

    vm.sendMessage = function(){

        smsService.sendMessage(vm.messageData).then(function(response){
            alert(response);            
        })
    }
    vm.searchRepos= function () {

        gitService.getrepos(vm.searchKey).then(function (response) {
            $state.go('repos',{repos: response.data});
        })
    }
}]);