import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'svg',
  classNames: ['sparkline'],
  attributeBindings: ['width', 'height'],

  draw: function() {
    var width = this.get('width');
    var height = this.get('height');
    var data = this.get('data');

    var graph = d3.select('#'+this.get('elementId'));
    var x = d3.scale.linear().domain([0, 48]).range([-5, width]);
    var y = d3.scale.linear().domain([0, 10]).range([0, height]);
    var line = d3.svg.line()
      .x(function(d,i) { return x(i); })
      .y(function(d) { return y(d); })
      .interpolate('basis');

    graph.selectAll('path')
      .data([data])
      .enter().append('path')
      .attr('transform', 'translate(' + x(1) + ')')
      .attr('d', line)
      .transition()
      .ease('linear')
      .duration(1000)
      .attr('transform', 'translate(' + x(0) + ')');
  }.on('didInsertElement'),
});
