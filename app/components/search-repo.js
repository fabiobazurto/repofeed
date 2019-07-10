import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
    session: service('ghoauth'),
    init() {
	this._super(...arguments);
	console.log('init component');
	this.get('computedModelChanged');
    },
    actions:{
	refreshModel(){
	    console.log(this.get("apikey"));
	    this.session.setKey(this.get("apikey"));
	    
	    console.log(this.session.apikey);
	    console.log('refreshModel()');
	    console.log(this.get("account"));
	    this.invalidateModel(this.get("account"));
	}
    }
});
