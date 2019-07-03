import Route from '@ember/routing/route';

export default Route.extend({
    model: function(params){
	let _model;

	if (params.account){
	     _model = this.store.findRecord('user',params.account);
	}
	else
	    _model = null;
	return _model;
    },
    actions:{
	reloadModel: function(){
	    this.refresh(); 
	},
	error: function(errors, transition){   
	    let notification = this.controllerFor('index').get('notifications');
	    let error = errors.errors[0];
	    let _message="";
	    
	     if (error.status === 0) {
		 console.log('no error');
		 return true;
             } else if (error.status == 403) {
		 _message = "Forbidden access";
            } else if (error.status == 401) {
		_message = "Unauthorized";
            } else if (error.status == 404) {
                _message = "Account not found";
		this.controllerFor('index').set('model',null);
            } else {
		_message = "Something went wrong. Try again...";
            }
	    
	    notification.error('Account not found. Try again.',{
		autoClear: true
	    });
	    
	}
    }

});
