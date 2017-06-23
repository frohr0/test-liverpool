
// angular.module("MyFirstApp",[])
// 	.controller("FirstController",["$scope",function(m){
// 		m.nombre = "Fidel";
//    m.newComment = {};
// 		m.comments = [
// 			{
//         userName : "Batman",
//         comment : "las tortillas estan frias Robin"
//       },
//       {
//         userName : "Spiderman",
//         comment : "Pongo las pizzas"
//       },
// 		];
//     m.addComment = function(){
//       m.comments.push(m.newComment);
//       m.newComment = {};
//     }
// 	}]);

var app = angular.module('finderLvp', []);
app.controller('FirstController', function($scope, $http) {
    $scope.results = [];
    $scope.
    $http.get("https://www.liverpool.com.mx/tienda?s=xbox&d3106047a194921c01969dfdec083925=json")
    .then(function(response) {
        console.log(response.data.contents[0].mainContent[3].contents[0].records.attributes.sku.smallImage[0]);
        
    });
});