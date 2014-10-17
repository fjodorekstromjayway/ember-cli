import ajax from 'ic-ajax';

export default Ember.Object.extend({
	search: function(name, id){
		//searchparam
		return ajax('http://omdbapi.com/?s='+id);
	}
});