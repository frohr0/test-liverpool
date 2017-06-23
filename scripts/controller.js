var app = angular.module('finderLvp', []);
app.controller('FirstController', function($scope, $http) {
  $scope.listResults = [];
  $scope.latestSearch = [];
  $scope.newSearch = "";
  $scope.objSearch = {};
  $scope.date = new Date();
  
  $scope.searchProduct = function(){
    $http.get("https://www.liverpool.com.mx/tienda?s="+$scope.newSearch+"&d3106047a194921c01969dfdec083925=json")
    .then(function(response) {
      $scope.listResults = response.data.contents[0].mainContent[3].contents[0].records;
        // console.log(response.data.contents[0].mainContent[3].contents[0].records);
        // console.log(response.data.contents[0].mainContent[3].contents[0].records[0].attributes["sku.smallImage"][0]);
        console.log(response.data.contents[0].mainContent[3].contents[0].records);

        $scope.objSearch.data = $scope.newSearch;
        $scope.objSearch.date = $scope.date;

        $scope.latestSearch.push($scope.objSearch);
        $scope.newSearch = "";
        $scope.objSearch = {};
    });
  }
});
