
app.factory('smsService',function($http,$q){

    return {
        sendMessage : function(data){

            var deferred = $q.defer();
            $http.post('/sms/send',{data:data}).then(
                function(response,status,headers,config){
                    return deferred.resolve(response);
                },
                function(error,status,header,config){
                    return deferred.reject(error);
                }
            )
            return deferred.promise;
        }
    }
})

