import {Component, View} from 'angular2/core';

@Component({
  selector: 'reddit-form'
})
@View({
template: `
  <section class="new-link">
    <div class="control-group">
      <div><label for="title">Title:</label></div>
      <div><input name="title"></div>
    </div>
    <div class="control-group">
      <div><label for="link">Link:</label></div>
      <div><input name="link"></div>
    </div>
    <button>Submit Link</button>
  </section>
`
})
export class FormComponent { }
