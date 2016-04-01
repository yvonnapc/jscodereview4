import Ember from 'ember';

var questions = [{
  id: 1,
  title: "Portland Food",
  author: "Alex Rivera",
  content: "Where is the best food on Mississippi St.?",
  note: "Willing to drive",
}, {
  id: 2,
  title: "Adventure Time",
  author: "Yvonna Contreras",
  content: "Is Adventure Time better than Spongebob?",
  note: "I am 12",
}];

export default Ember.Route.extend({
  model(){
    return questions;
  },
});
