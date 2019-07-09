import Component from '@ember/component';
import { computed } from '@ember/object';
import { observer } from '@ember/object'; 
export default Component.extend({
    computedModel: computed('model.[]', function(){
	return this.get('model');
    }),
    computedModelChanged: observer('model', function(){
	console.log('computedModelChanged');
    }),
    init(){
	this._super(...arguments);
	this.get('computedModelChanged');
    },

    actions:{
	refreshModel(){
	    this.sendAction('invalidateModel');
	}
    }
});
