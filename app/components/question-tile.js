import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestion(question){
      if(confirm('Delete this question?')){
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
