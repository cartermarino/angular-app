angular.module('iTunes', [])
  .controller('iTunesCtrl', function($scope, $http) {
    if ($scope.search == undefined){
      $scope.search = "Sherlock Holmes"
      fetch($scope.search);
      $scope.search= ''
    } else {
      fetch($scope.search);
    }

    function fetch(name) {
      $http({
        method: "GET",
        url: "http://www.omdbapi.com/?t="+name
      }).then(function successCallback(response){
        console.log(response.data)
        $scope.title=response.data.Title
        movieTitle = response.data.Title
      }, function errorCallback(response){
        console.log("error " + response)
      });
    };

});
