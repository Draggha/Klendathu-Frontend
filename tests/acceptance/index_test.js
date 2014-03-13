var App;

module('Acceptances - Index', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('index renders', function(){
  expect(3);

  visit('/').then(function(){
    var title = find('p.index-introduction');
    var list = find('ul.index-stuff li');

    var searchString = 'Please proceed to the';
    equal(title.text().substr(0, searchString.length), searchString);

    equal(list.length, 3);
    equal(list.text(), 'redyellowblue');
  });
});
