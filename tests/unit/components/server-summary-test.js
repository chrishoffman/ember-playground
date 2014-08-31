import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('server-summary', 'ServerStatsComponent', {
  // specify the other units that are required for this test
   needs: ['component:d3-sparkline']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject({cpu: [1]});
  equal(component.state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component.state, 'inDOM');
});
