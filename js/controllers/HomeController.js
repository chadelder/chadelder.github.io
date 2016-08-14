app.controller('HomeController', ['$scope', function($scope) {
  $scope.title = "Chad Jerome Elder";

  $scope.layout =  {
      'background-image': 'url(img/two.jpg)',
      art: 'I started programming in college modeling mathematical systems, which\
      is similar to OOP. Then I realized the really cool stuff was happening\
      in design.',
      engineer: 'I started out as a sheet metal mechanic.  Then went to school \
      to get a mechanical engineering degree. Creative engineering and design with \
      some logic.',
      muzik: 'This link will take you to some song I wrote and recorded. All\
      instruments were played by me.  I have been listening to music and playing\
      instruments since I was a kid.',
      pi: 'Early in the mornings all be out there finding where my limits are.'
  };
}]);
