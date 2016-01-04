import {Component, View} from 'angular2/core';
@Component({
  selector: 'reddit-article'
})
@View({
  template: `
<article>
  <div class="votes">{{ votes }}</div>
  <div class="main">
    <h2>
      <a href="{{ link }}">{{ title }}</a>
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
  votes: number;
  title: string;
  link: string;
  constructor() {
    this.votes = 10;
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
  }
  voteUp() {
    this.votes += 1;
  }
  voteDown() {
    this.votes -= 1;
  }
}
