import Ember from 'ember';

export default Ember.Component.extend({
  bookMarked: Ember.inject.service(),

  actions: {
    remove(item){
      this.get('bookMarked').remove(item);
    }
  }
});
