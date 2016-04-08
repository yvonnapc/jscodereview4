import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  content: DS.attr(),
  question: DS.belongsTo('question', {async:true})
});
