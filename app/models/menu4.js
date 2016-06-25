import DS from 'ember-data';

var Menu = DS.Model.extend({
  property:DS.attr()
});

Menu.reopenClass({
  FIXTURES: [
    {
      id: 1,
      property: "Oh shit"
    },
    {
      id: 2,
      property: "What happened"
    },
    {
      id: 3,
      property: "Oh no!"
    }
  ]
});

export default Menu;
