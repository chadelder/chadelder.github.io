app.controller('EngineeredController', ['$scope', function($scope) {
  $scope.title = "Engineering";

  $scope.EngineeredLayout = {
    lightimage: 'img/lightbulbs.jpg',
    text: 'You can know all the physics about light and still be sitting in the dark.'
  }

  $scope.hoverIn = function(){
    this.hoverEdit = true;
};

  $scope.hoverOut = function(){
    this.hoverEdit = false;
};

}]);
