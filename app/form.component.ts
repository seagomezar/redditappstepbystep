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
  <reddit-article *ngFor="#article of sortArticles(articles)" [article]="article"></reddit-article>
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
  sortArticles(articles){
    return articles.sort(function(a,b) {return b.votes - a.votes});
  }
  addArticle(title, link) {
    if(title.value && link.value){
      this.articles.push(new Article(title.value, link.value));
      //Limpiamos el codigo
      title.value = '';
      link.value = '';
    }
    else{
      alert("Link and Title are required");
    }

  }
}
