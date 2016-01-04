import {Component, View} from 'angular2/core';

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
`
})
export class FormComponent {
  addArticle(title, link) {
    console.log("Adding article with title", title.value, "and link", link.value);
  }
}
