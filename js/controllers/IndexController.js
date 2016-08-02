app.controller('IndexController', ['$scope', '$location', function($scope, $location) {

  $scope.indexLayout = {
    'background-image': 'url(img/black.jpeg)'
  }

  $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.url());
     return active;
  };
}]);
