import Ember from 'ember';

export default Ember.Controller.extend({
	fetchReqdData(selectedNavMenu){
		let promises = [];

		promises.push(this.store.findAll(selectedNavMenu.get('model')));
		Ember.RSVP.all(promises).then(function(){
			console.log('data fetched');
		});
	},
});
