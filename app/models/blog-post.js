import DS from 'ember-data';

export default DS.Model.extend({
  blogPostTitle: DS.attr('string'),
  blogPostEntry: DS.attr('string')
});
