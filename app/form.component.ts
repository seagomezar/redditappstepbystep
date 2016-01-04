import {Component, View} from 'angular2/core';
import {Article} from './article.class'
import {ArticleComponent} from './article.component'

@Component({
  selector: 'reddit-form'
})
@View({
template: `
  <section class="new-link">
    <div class="control-group">
      <div><label for="title">Title:</label></div>
      <div><input name="title" #newtitle></div>
    </div>
    <div class="control-group">
      <div><label for="link">Link:</label></div>
      <div><input name="link" #newlink></div>
    </div>
    <button (click)="addArticle(newtitle, newlink)">Submit Link</button>
  </section>
  <reddit-article></reddit-article><reddit-article></reddit-article>

`,
directives: [ArticleComponent]
})
export class FormComponent {
  articles: Array<Article>;
  constructor(){
    this.articles = [
      new Article('Angular 2', 'http://angular.io'),
      new Article('Fullstack', 'http://fullstack.io')
    ];
  }
  addArticle(title, link) {
    this.articles.push(new Article(title.value, link.value));
    console.log('Acabe de anadir un nuevo articulo',this.articles);
  }
}
