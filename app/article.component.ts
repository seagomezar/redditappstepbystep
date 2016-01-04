import {Component, View} from 'angular2/core';

class Article {
  title: string;
  link: string;
  votes: number;
  constructor(title, link) {
    this.title = title;
    this.link = link;
    this.votes = 0;
  }
}

@Component({
  selector: 'reddit-article'
})
@View({
  template: `
<article>
  <div class="votes">{{ article.votes }}</div>
  <div class="main">
    <h2>
      <a href="{{ link }}">{{ article.title }}</a>
    </h2>
    <ul>
      <li><a href (click)='voteUp()'>upvote</a></li>
      <li><a href (click)='voteDown()'>downvote</a></li>
    </ul>
  </div>
</article>
`
})
export class ArticleComponent {
  article: Article;
  constructor() {
    this.article = new Article('Angular 2', 'http://angular.io');
  }
  voteUp() {
    this.article.votes += 1;
    return false;
  }
  voteDown() {
    this.article.votes -= 1;
    return false;
  }
}
