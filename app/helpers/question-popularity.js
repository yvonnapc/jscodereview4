import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') >=3){
    return Ember.String.htmlSafe( '<span class="glyphicon glyphicon-thumbs-up"></span>');
  }
}

export default Ember.Helper.helper(questionPopularity);
