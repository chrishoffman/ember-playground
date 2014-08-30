import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['highchart-chart'],

  chartOptions: null,
  series: null,

  updateSeries: function () {
    this.initializeChart();
  },

  initializeChart: function () {
    var chart = this.get('chartOptions');
    chart.series = this.get('series');
    $('#'+this.get('elementId')).highcharts(chart);
  },

  didInsertElement: function () {
    console.log('didInsertElement');
    this.initializeChart();
    this.addObserver('series', this, this.updateSeries);
  },

  willClearRender: function () {
    console.log('willClearRender');
  },

  willDestroyElement: function () {
    console.log('willDestroyElement');
    this.removeObserver('series');
    $('#'+this.get('elementId')).highcharts().destroy();
  },

  willInsertElement: function () {
    console.log('willInsertElement');
  }
});
