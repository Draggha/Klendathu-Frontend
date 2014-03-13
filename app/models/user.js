Ember.User = DS.Model.extend({
    name: DS.attr('string'),
    password: DS.attr('string')
});

Ember.User.FIXTURES = [
    {
        id: 1,
        name: "admin",
        password: "admin"
    }
];

export default Ember.User;