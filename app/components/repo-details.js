import Component from '@ember/component';
import { computed } from '@ember/object';
import { observer } from '@ember/object'; 
export default Component.extend({
    filterKey:'ALL',
    
    init(){
	this._super(...arguments);
	this.get('computedModelChanged');
    },

    actions:{
	filter(language){
	    this.set('filterKey',language);	    
	}
    }
});
