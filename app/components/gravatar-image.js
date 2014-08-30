import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['gravatarUrl:src'],

  gravatarUrl: function() {
    var size = this.get('size');
    var url = "http://www.gravatar.com/avatar/" + md5(this.get('email'));
    if (size !== undefined) {
      url += '?s=' + size;
    }

    return url;
  }.property('email', 'size')
});
