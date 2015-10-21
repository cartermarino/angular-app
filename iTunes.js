angular.module('iTunes', ['ngResource']);

function iTunesCtrl($scope, $resource) {
  $scope.iTunes = $resource('https://itunes.apple.com/:action',
    {action: 'search.json', , callback: 'JSON_CALLBACK'}
    {get: {method: 'JSONP'}})

  $scope.iTunesResult = $scope.iTunes.get();
}
