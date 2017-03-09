/**
 * Created by mlingolu on 2/26/17.
 */


app.factory('gitService',function ($http,$q) {
    
    
    
    return {
        getrepos :function (searchKey) {
            var searchRepo = 'https://api.github.com/repositories?q='+searchKey;

            return $http.get(searchRepo).then(
                function success(data) {
                    return data;
                },function error(error) {
                    return error
                }
            )
        },
        gitIssues :function (name) {
            var searchRepo = 'https://api.github.com/repos/'+name+'/issues';

            return $http.get(searchRepo).then(
                function success(data) {
                    return data;
                },function error(error) {
                    return error
                }
            )
        }
    }
})