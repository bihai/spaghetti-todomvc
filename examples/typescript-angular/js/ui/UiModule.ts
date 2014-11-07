module todos.ui {
    export class UiModule {
        public static main():void {
            angular.module('todomvc', [])
                .controller('todoCtrl', TodoCtrl)
                .directive('todoBlur', todoBlur)
                .directive('todoFocus', todoFocus)
                .factory('todoStorage', function() { 
                    return todos.storage.StorageModule.createStorage();
                });

            angular.element(document).ready(function() {
                angular.bootstrap(document, ['todomvc']);
            });
        }
    }
}
