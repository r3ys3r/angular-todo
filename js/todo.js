function TodoCtrl($scope){
	
	
	$scope.todos = [
		{text:'Learn Angularjs', done:false},
		{text:'Build an App', done:false}
	];
	
	$scope.getTotalTodos = function(){
		return $scope.todos.length;
	}
	
	$scope.clearCompleted = function() {
		$scope.todos = _.filter($scope.todos, function(todos){
			return !todo.done;
		});
	}
	
	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
		$scope.$log = 'Todo was added';
	}
}