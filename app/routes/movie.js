import MovieAdapter from 'emberreddit/adapters/movie';

export default Ember.Route.extend({
	model: function(params){
		var adapter = MovieAdapter.create();
		return adapter.search('movie', params.search);
	}
});