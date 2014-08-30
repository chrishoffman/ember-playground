import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DevcentralENV.locationType
});

Router.map(function() {
  this.route('servers', { path: '/servers' }, function() {
    this.route('server', { path: ":server_name" });
  });
});

export default Router;
