angular.module('iTunes', [])
  .controller('iTunesCtrl', function($scope, $http) {

    if ($scope.search == undefined){
      $scope.search = "Sherlock Holmes"
      fetch($scope.search);
    } else {
      fetch($scope.search);
    }
    // var pendingSearch;
    // $scope.change= function(){
    //   if(pendingSearch){
    //     clearTimeout(pendingSearch);
    //   }
    //   pendingSearch = setTimeout(fetch,1000);
    // };
    function fetch(name) {
      $http({
        method: "GET",
        url: "http://www.omdbapi.com/?t="+name
      }).then(function successCallback(response){
        console.log(response)
      }, function errorCallback(response){
        console.log("error " + response)
      });
    };
});
