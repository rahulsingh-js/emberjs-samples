import DS from 'ember-data';

var Menu = DS.Model.extend({
  newproperty:DS.attr()
});

Menu.reopenClass({
  FIXTURES: [
    {
      id: 1,
      newproperty: "Yes"
    },
    {
      id: 2,
      newproperty: "No"
    },
    {
      id: 3,
      newproperty: "I am not sure"
    }
  ]
});

export default Menu;
