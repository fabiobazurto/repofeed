import DS from 'ember-data';
import { decamelize } from '@ember/string'; 
export default DS.JSONSerializer.extend({
    primaryKey: 'login',
    keyForAttribute: function(key) {
    return decamelize(key);
  }
});
