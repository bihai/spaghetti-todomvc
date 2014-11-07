package todos.storage

class StorageModule {

    class object {
        fun createStorage(): ITodoStorage {
            return TodoStorage()
        }
    }
}
