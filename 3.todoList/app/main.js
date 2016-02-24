System.register(['angular2/platform/browser', './todo_app'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, todo_app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (todo_app_1_1) {
                todo_app_1 = todo_app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(todo_app_1.TodoApp); //bootstrap todoApp
        }
    }
});
//# sourceMappingURL=main.js.map