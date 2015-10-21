angular.module('iTunes', [])
  .controller('iTunesCtrl', function($scope, $http) {
    $scope.sortType     = 'Title'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchMovie = '';    // set the default search/filter term


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
        url: "http://www.omdbapi.com/?s="+name
      }).then(function successCallback(response){
        console.log(response.data.Search)
        $scope.searches = response.data.Search
        // $scope.title=response.data.Title
        // $scope.year=response.data.Year
        // $scope.plot=response.data.Plot
        // movieTitle = response.data.Title
      }, function errorCallback(response){
        console.log("error " + response)
      });
    };

});

