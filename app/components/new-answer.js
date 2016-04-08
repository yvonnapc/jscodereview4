import Ember from 'ember';

export default Ember.Component.extend({
  addAnswerForm: false,

  actions: {
    answerFormShow() {
      this.set('addAnswerForm', true);
    },

    saveAnswer(){
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        content: this.get('content'),
        question: this.get('question'),
      };
      this.set('addAnswerForm', false);
      this.sendAction('saveAnswer2', params);
    }
  }
});
