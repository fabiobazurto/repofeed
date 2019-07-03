import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | user', function(hooks) {
    setupTest(hooks);


    test('should own a profile', function(assert) {
	const User = this.owner.lookup('service:store').modelFor('user');

	// lookup the relationship on the user model
	const relationship = get(User, 'relationshipsByName').get('repos');

	assert.equal(relationship.key, 'repo', 'has relationship with profile');
	assert.equal(relationship.kind, 'hasMany', 'kind of relationship is belongsTo');
    });
});
