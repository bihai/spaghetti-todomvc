module todos.storage {
    export class StorageModule {
        public  static createStorage():ITodoStorage {
            return new TodoStorage();
        }
    }
}
