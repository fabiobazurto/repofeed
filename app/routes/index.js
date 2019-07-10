import Route from '@ember/routing/route';

export default Route.extend({
    username: '',
    model: function(params){
	let _model;
	console.log(this.get("username"));
	if(!this.get("username"))
	    _model=null;
	else
	    _model=this.store.findRecord('user',this.get("username"));
	return _model;
	
    },
    actions:{
	invalidateModel(userSearch){
	    console.log('invalidateModel');
	    console.log(userSearch);
	    this.set("username",userSearch);
	    this.refresh(); 
	},
	error: function(errors){   
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
                _message = "GitHub Account not found";
		this.controllerFor('index').set('model',null);
            } else {
		_message = "Something went wrong. Try again...";
            }
	    
	    notification.error(_message,{
		autoClear: true
	    });
	    
	}
    }

});
