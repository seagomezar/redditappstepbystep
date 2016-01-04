System.register(['angular2/core', './article.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, article_component_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (article_component_1_1) {
                article_component_1 = article_component_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent() {
                }
                FormComponent.prototype.addArticle = function (title, link) {
                    console.log("Adding article with title", title.value, "and link", link.value);
                };
                FormComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-form'
                    }),
                    core_1.View({
                        template: "\n  <section class=\"new-link\">\n    <div class=\"control-group\">\n      <div><label for=\"title\">Title:</label></div>\n      <div><input name=\"title\" #newtitle></div>\n    </div>\n    <div class=\"control-group\">\n      <div><label for=\"link\">Link:</label></div>\n      <div><input name=\"link\" #newlink></div>\n    </div>\n    <button (click)=\"addArticle(newtitle, newlink)\">Submit Link</button>\n  </section>\n  <reddit-article></reddit-article><reddit-article></reddit-article>\n\n",
                        directives: [article_component_1.ArticleComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormComponent);
                return FormComponent;
            })();
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=form.component.js.map