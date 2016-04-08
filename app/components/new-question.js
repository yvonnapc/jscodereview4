import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow(){
      this.set('addNewQuestion', true);
    },

    saveQuestion(){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'),
        date: this.get('date'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
