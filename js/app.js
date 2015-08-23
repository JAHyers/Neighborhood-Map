angular.module('todoApp', [])
   .controller('todoCtrl', function($scope) {

   $scope.totalTodos = 4;

   $scope.todos=[
      {text:'Learn AngularJS', done:false},
      {text:'This guy types too fast', done:false},
      {text:'Now that it is working, make it better.', done:false}
   ];
   
});
