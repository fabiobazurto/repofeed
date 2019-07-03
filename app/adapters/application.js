import DS from 'ember-data';
import { computed } from '@ember/object'

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com'
});

