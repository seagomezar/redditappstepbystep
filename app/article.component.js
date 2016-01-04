System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ArticleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArticleComponent = (function () {
                function ArticleComponent() {
                    this.votes = 10;
                    this.title = 'Angular 2';
                    this.link = 'http://angular.io';
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.votes += 1;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article'
                    }),
                    core_1.View({
                        template: "\n<article>\n  <div class=\"votes\">{{ votes }}</div>\n  <div class=\"main\">\n    <h2>\n      <a href=\"{{ link }}\">{{ title }}</a>\n    </h2>\n    <ul>\n      <li><a href (click)='voteUp()'>upvote</a></li>\n      <li><a href (click)='voteDown()'>downvote</a></li>\n    </ul>\n  </div>\n</article>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            })();
            exports_1("ArticleComponent", ArticleComponent);
        }
    }
});
//# sourceMappingURL=article.component.js.map