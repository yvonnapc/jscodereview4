import Ember from 'ember';

export default Ember.Component.extend({
  fullName: Ember.computed('answer.firstName' , 'answer.lastName', function(){
    return this.get('answer.firstName') + ' ' + this.get('answer.lastName');
  })
});
