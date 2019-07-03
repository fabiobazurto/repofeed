
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeResponse(store, type, payload) {
	payload.forEach(function(e) {
            e.attributes={};
            e.relationships={
		branches: {
                    links: {
			related: e.url + '/branches'
		    }
		}
	    };
	    e.id= e.name;
	    e.type=type.modelName;
            e.attributes.name= e.name;
	    e.attributes.language= e.language;
	    e.attributes.htmlUrl= e.html_url;
	    e.attributes.private=(e.private?'private':'public')	    ;
	});

	return {
	    data: payload   
	}
  }
});
