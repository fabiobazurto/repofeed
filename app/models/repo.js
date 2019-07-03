import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    name: DS.attr('string'),
    htmlUrl:  DS.attr('string'),
    language: DS.attr('string'),
    private: DS.attr('string'),
    branches: DS.hasMany('branch')    
});
