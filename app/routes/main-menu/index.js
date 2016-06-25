import Ember from 'ember';

const currentRoutePath = 'main-menu/index';

export default Ember.Route.extend({
	templateBasePath:'main-menu',
	controllerBasePath:'main-menu',

	model(){}, //hook

	renderTemplate(){ //hook
		this.render();
		this.setTemplate();
	},

	setTemplate(selectedNavMenu){
		if(!selectedNavMenu){
			selectedNavMenu = this.controller.get('navigationMenu').get('firstObject');
		}

		this.controller.set('currentMenu', selectedNavMenu);
		selectedNavMenu.set('isActive', true);

		let controller = this.getContoller(`${this.get('controllerBasePath')}.${selectedNavMenu.get('controllerSubPath')}`),
			template = `${this.get('templateBasePath')}/${selectedNavMenu.get('templateSubPath')}`;

		controller.fetchReqdData(selectedNavMenu);

		this.render(template,{
			into: currentRoutePath,
			outlet:'rightContainer',
			controller:controller
		});
	},

	removeCurrentTemplate(){
		this.disconnectOutlet({
			outlet:'rightContainer',
			parentView:currentRoutePath
		});
	},

	getContoller(controller){
		return this.controllerFor(controller || 'registration.main-menu.index');
	},

	actions:{
		navigateTo(selectedNavMenu){
			this.removeCurrentTemplate();
			this.controller.get('currentMenu').set('isActive', false);
			this.setTemplate(selectedNavMenu);
		}
	}
});
