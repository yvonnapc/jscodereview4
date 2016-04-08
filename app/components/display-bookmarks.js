import Ember from 'ember';

export default Ember.Component.extend({
  bookMarked: Ember.inject.service('bookMarked'),
});
