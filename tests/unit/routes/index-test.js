import { test, moduleFor } from 'ember-qunit';

moduleFor('route:index', 'IndexRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  setup: function () {},
  teardown: function () {}
});

test('it exists', function() {
  ok(this.subject());
});
