var app = angular.module('MyFirstApp', []);
app.controller('FirstController', function($scope, $http) {
    $http.get("https://www.liverpool.com.mx/tienda?s=xbox&d3106047a194921c01969dfdec083925=json")
    .then(function(response) {
        console.log(response.data.contents[0].mainContent[3].contents[0].records);
    });
});