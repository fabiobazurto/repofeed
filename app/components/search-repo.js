import Component from '@ember/component';

export default Component.extend({
    computedModel: Ember.computed('model.[]', function() {
	return this.get('model').map(function(m) {
	    return `Computed: ${m.id}`;
	});
    }),

    computedModelChanged: Ember.observer('model', function() {
	console.log('computedModelChanged');
    }),

    init() {
	this._super(...arguments);
	this.get('computedModelChanged');
    },
    
    actions:{
	refreshModel: function(){
	     this.send('invalidateModel');
	}
    }
});
