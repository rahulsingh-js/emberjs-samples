import DS from 'ember-data';

var Menu = DS.Model.extend({
  property:DS.attr()
});

Menu.reopenClass({
  FIXTURES: [
    {
      id: 1,
      property: "JS property"
    },
    {
      id: 2,
      property: "Python property"
    },
    {
      id: 3,
      property: "DJango property"
    }
  ]
});

export default Menu;
