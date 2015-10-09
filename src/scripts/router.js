import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var Router = Backbone.Router.extend({
  routes: {
    '': 'showHome'
    'details/:id': 'showDetails'
  },

  showHome: function () {
    console.log('showHome');
  },

  showDetails: function () {
    console.log('showDetails');

  },

  initialize: function () {
    console.log('initialize test');
    Backbone.history.start();

  }

});

export default Router;
