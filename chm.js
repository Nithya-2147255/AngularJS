var myapp=angular.module("myapp",[]);
myapp.controller("myctrl",function($scope,$http) 
{
     $http.get('https://raw.githubusercontent.com/Nithya-2147255/wd_angularjs/main/chm.json')
    .success(function(response)
    {
        $scope.names=response.EmployeeInfo; 
    });
    $scope.rowlimit=5;
});

myapp.filter("myfilter",function()
{
    return function(input)
    {
       return input.substring(0,1).toUpperCase()+input.substring(1,undefined).toLowerCase();
    }
});