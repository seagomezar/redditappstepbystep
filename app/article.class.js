System.register([], function(exports_1) {
    var Article;
    return {
        setters:[],
        execute: function() {
            Article = (function () {
                function Article(title, link) {
                    this.title = title;
                    this.link = link;
                    this.votes = 0;
                }
                Article.prototype.voteUp = function () {
                    this.votes += 1;
                    return false;
                };
                Article.prototype.voteDown = function () {
                    this.votes -= 1;
                    return false;
                };
                return Article;
            })();
            exports_1("Article", Article);
        }
    }
});
//# sourceMappingURL=article.class.js.map