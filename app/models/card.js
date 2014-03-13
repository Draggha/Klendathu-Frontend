Ember.Card = DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string')
});

Ember.Card.FIXTURES = [
    {
        id: 1,
        title: "Card 1",
        text: "Lorem ipsum dolor sit amet..."
    },
    {
        id: 2,
        title: "Card 2",
        text: "Let me test something."
    },
    {
        id: 3,
        title: "Card 3",
        text: "Now it's getting interesting..."
    }
];

export default Ember.Card;