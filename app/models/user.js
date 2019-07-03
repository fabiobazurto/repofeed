import DS from 'ember-data';
import { computed } from '@ember/object'; 
const { Model } = DS;

export default Model.extend({
    name: DS.attr('string'),
    publicRepos: DS.attr('number'),
    repos: DS.hasMany('repo'),
    languages: computed('repos.@each.language', function() {
	return this.get('repos').mapBy('language').uniq();
    })
});
