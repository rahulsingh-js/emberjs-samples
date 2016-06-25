import DS from 'ember-data';

var Menu = DS.Model.extend({
  property1:DS.attr()
});

Menu.reopenClass({
  FIXTURES: [
    {
      id: 1,
      property1: "Something"
    },
    {
      id: 2,
      property1: "Something new"
    },
    {
      id: 3,
      property1: "Something really new"
    }
  ]
});

export default Menu;
