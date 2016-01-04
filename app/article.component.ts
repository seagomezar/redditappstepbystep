import {Component, View} from 'angular2/core';
import {Article} from './article.class'


@Component({
  selector: 'reddit-article',
  inputs: ['article']
})
@View({
  template: `
<article>
  <div class="votes">{{ article.votes }}</div>
  <div class="main">
    <h2>
      <a href="{{ article.link }}" target="_blank">{{ article.title }}</a>
    </h2>
    <ul>
      <li><a href (click)='article.voteUp()'>upvote</a></li>
      <li><a href (click)='article.voteDown()'>downvote</a></li>
    </ul>
  </div>
</article>
`
})
export class ArticleComponent {
}
