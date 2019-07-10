import DS from 'ember-data';
import { computed } from '@ember/object'
import { inject as service } from '@ember/service';

export default DS.RESTAdapter.extend({
    session: service('ghoauth'),
    host: 'https://api.github.com',
    headers: computed(function() {
	return {
	    'Authorization': 'token ' + this.session.apikey
	};
    }).volatile()
});

