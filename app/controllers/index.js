import $ from 'jquery';
import Controller from '@ember/controller';

export default Controller.extend({
    appName:     'RepoFeed',
    queryParams: ['account'],
    actions:{
	Filter: function(language){
	    let _this = this;
	    $('.repo').hide();
	    $('.'+language).show();
	    
	},
	Request: function(){
	    this.send('reloadModel');
	}
    }
});