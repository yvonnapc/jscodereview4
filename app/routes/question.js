import Ember from 'ember';

export default Ember.Route.extend({
  bookMarked: Ember.inject.service(),
  model(params){
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    addToBookmarks(item){
      this.get('bookMarked').add(item);
      alert('Item Bookmarked');
      this.transitionTo('forum');
    },
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    destroyQuestion(question){
      if(confirm('Delete this question?')){
        var answer_deletions = question.get('answers').map(function(answer){
          return answer.destroyRecord();
        });
        Ember.RSVP.all(answer_deletions).then(function(){
          return question.destroyRecord();
        });
        this.transitionTo('index');
      }
    },

    saveAnswer3(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;

      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', params.question);
    }
  }
});
