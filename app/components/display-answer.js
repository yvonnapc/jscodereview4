import Ember from 'ember';

export default Ember.Component.extend({
  fullQuestion: Ember.computed('question.title' , 'question.author', function(){
    return this.get('question.title') + ' By: ' + this.get('question.author');
  })
});
