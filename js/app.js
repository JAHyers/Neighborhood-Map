angular.module('todoApp', [])
   .controller('todoCtrl', function($scope) {

   $scope.todos=[
      {text:'Learn AngularJS', done:false},
      {text:'This guy types too fast', done:false},
      {text:'Now that it is working, make it better.', done:false}
   ];
   $scope.getTotalTodos = function(){
      return $scope.todos.length;
   }

   $scope.addTodo = function(){
      $scope.todos.push({text:$scope.formTodoText, done:false});
      $scope.formTodoText = '';
   };

   $scope.clearCompleted = function(){
      var oldTodos = $scope.todos;
      $scope.todos=[];
         angular.forEach(oldTodos, function(todo){
            if (!todo.done) $scope.todos.push(todo);
         });
      };
   });
