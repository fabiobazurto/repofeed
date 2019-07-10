import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
    session: service('ghoauth'),
    filter_lang:'',
    init() {
	this._super(...arguments);
	console.log('init component');
	this.get('computedModelChanged');
    },
    actions:{
	refreshModel(){
	    this.session.setKey(this.get("apikey"));
	    this.invalidateModel(this.get("account"));
	},
	filter(language){
	    this.filter_lang=language;
	}
    }
});
