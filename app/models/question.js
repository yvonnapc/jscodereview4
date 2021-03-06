import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  notes: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
