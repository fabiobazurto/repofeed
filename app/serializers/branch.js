
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeResponse(store, type, payload) {
	payload.forEach(function(e) {
	    e.attributes={};
	    e.id = e.name;
	    e.type=type.modelName;
	    e.attributes.name = e.name;
	});

	return {
	    data: payload   
	}
    }
});
