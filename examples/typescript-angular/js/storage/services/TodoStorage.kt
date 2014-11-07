package todos.storage

/**
 * Services that persists and retrieves TODOs from localStorage.
 */

class TodoStorage : ITodoStorage {
    val STORAGE_ID = 'todos-angularjs-typescript';

    fun get(): Array<TodoItem> {
        return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]')
    }

    fun put(todos: Array<TodoItem>): Unit {
        localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos))
    }
}