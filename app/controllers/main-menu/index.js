import Ember from 'ember';

export default Ember.Controller.extend({
	navigationMenu: [
		Ember.Object.create({
			id:1,
			name: 'Menu 1',
			isActive: false,
			model:'menu1',
			controllerSubPath:'menu1',
			templateSubPath:'menu1',
			viewPermission:['isAdmin'],
			editPermission:['isAdmin'],
		}),
		Ember.Object.create({
			id:1,
			name: 'Menu 2',
			isActive: false,
			model:'menu2',
			controllerSubPath:'menu2',
			templateSubPath:'menu2',
			viewPermission:['isAdmin'],
			editPermission:['isAdmin']
		}),
		Ember.Object.create({
			id:1,
			name: 'Menu 3',
			isActive: false,
			model:'menu3',
			controllerSubPath:'menu3',
			templateSubPath:'menu3',
			viewPermission:['isAdmin'],
			editPermission:['isAdmin']
		}),
		Ember.Object.create({
			id:1,
			name: 'Menu 4',
			isActive: false,
			model:'menu4',
			controllerSubPath:'menu4',
			templateSubPath:'menu4',
			viewPermission:['isAdmin'],
			editPermission:['isAdmin']
		})
	],
	currentMenu:null

});
