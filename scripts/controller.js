var app = angular.module('finderLvp', ["LocalStorageModule"]);
app.controller('FirstController', function($scope, $http, localStorageService) {
  $scope.listResults = [];
  if(localStorageService.get("latest-search")){
    $scope.latestSearch = localStorageService.get("latest-search");  
  }else{
    $scope.latestSearch = [];
  }
  // $scope.latestSearch = [];
  $scope.newSearch = "";
  $scope.objSearch = {};
  $scope.date = new Date();


  $scope.searchProduct = function(){
    $http.get("https://www.liverpool.com.mx/tienda?s="+$scope.newSearch+"&d3106047a194921c01969dfdec083925=json")
    .then(function(response) {
      $scope.listResults = response.data.contents[0].mainContent[3].contents[0].records;
        $scope.objSearch.data = $scope.newSearch;
        $scope.objSearch.date = $scope.date;
        $scope.latestSearch.push($scope.objSearch);
        localStorageService.set("latest-search",$scope.latestSearch)
        $scope.newSearch = "";
        $scope.objSearch = {};
    });
  }
  $scope.clearLatest = function(){
    $scope.latestSearch = [];
    localStorageService.set("latest-search",$scope.latestSearch)
  }
});
