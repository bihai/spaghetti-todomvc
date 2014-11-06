/// <reference path='../_all.ts' />

/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
module todos.ui {
    'use strict';

    var todomvc = angular.module('todomvc', [])
            .controller('todoCtrl', TodoCtrl)
            .directive('todoBlur', todoBlur)
            .directive('todoFocus', todoFocus)
            .factory('todoStorage', function() { return todos.storage.StorageModule.createStorage(); });
}


