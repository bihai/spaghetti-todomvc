/*
 * Generated by Spaghetti 2.0 at 2014-11-06 21:30:18
 */
module todos.storage {
export interface ITodoStorage {
	get():Array<todos.storage.TodoItem>;
	put(todos:Array<todos.storage.TodoItem>):void;

}
export interface TodoItem {
	title: string;
	completed: boolean;

}
export class __StorageModuleProxy {
	createStorage():todos.storage.ITodoStorage {
		return todos.storage.StorageModule.createStorage();
	}

}
export function __createSpaghettiModule():any {
	return new todos.storage.__StorageModuleProxy();
}
}