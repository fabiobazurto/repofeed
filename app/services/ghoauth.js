import Service from '@ember/service';

export default Service.extend({
    apikey: null,
    
    setKey(pKey){
	this.apikey = pKey;
    },
    
    
});
