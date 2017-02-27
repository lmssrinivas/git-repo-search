/**
 * Created by mlingolu on 2/26/17.
 */


var app = angular.module('app',['ui.router']);


app.config(function ($stateProvider,$urlRouterProvider) {



    $stateProvider
        .state('home',{
            url:'/home',
            controller:'HomeController',
            controllerAs:'vm',
            templateUrl:'app/home/home.tpl.html'

        })
        .state('repos',{
            url:'/repos',
            controller:'ReposController',
            controllerAs:'vm',
            templateUrl:'app/repos/repos.tpl.html',
            params:{repos:null}
        })
        .state('issues',{
            url:'/issues/:repo',
            controller:'IssuesController',
            controllerAs:'vm',
            templateUrl:'app/issues/issues.tpl.html',
            params:{repos:null}
        })

    $urlRouterProvider.otherwise('/home');
});


