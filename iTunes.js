angular.module('iTunes', [])
  .controller('iTunesCtrl', function($scope, $http) {
    $scope.sortType     = 'Title'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchMovie = '';    // set the default search/filter term

    $scope.fetch = function() {
        $http({
          method: "GET",
          url: "http://www.omdbapi.com/?s="+$scope.search
        }).then(function successCallback(response){
          console.log(response.data.Search)
          $scope.searches = response.data.Search
          },
          function errorCallback(response){
          console.log("error " + response)
        })
    };
});
