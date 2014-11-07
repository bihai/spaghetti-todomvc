/// <reference path='../_all.ts' />

module todos.ui {
	export interface ITodoScope extends ng.IScope {
		todos: todos.storage.TodoItem[];
		newTodo: string;
		editedTodo: todos.storage.TodoItem;
		remainingCount: number;
		doneCount: number;
		allChecked: boolean;
		statusFilter: { completed: boolean; };
		location: ng.ILocationService;
		vm: TodoCtrl;
	}
}