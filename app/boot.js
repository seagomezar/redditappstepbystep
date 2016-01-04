System.register(['angular2/platform/browser', './app.component', './form.component', './article.component'], function(exports_1) {
    var browser_1, app_component_1, form_component_1, article_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (form_component_1_1) {
                form_component_1 = form_component_1_1;
            },
            function (article_component_1_1) {
                article_component_1 = article_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
            browser_1.bootstrap(form_component_1.FormComponent);
            browser_1.bootstrap(article_component_1.ArticleComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map