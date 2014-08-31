import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('d3-sparkline', 'D3SparklineComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject({data: [1]});
  equal(component.state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component.state, 'inDOM');
});
