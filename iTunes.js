angular.module('iTunes', ['ngResource'])
  .controller('iTunesCtrl', function ($scope, $resource) {

  $http({
    method: 'GET',
    url: 'http://www.omdbapi.com/?s=star_wars'
  }).then(function successCallback(response) {
    console.log(response)
  }, function errorCallback(response) {
    console.log('shit blew up');
  });
})
