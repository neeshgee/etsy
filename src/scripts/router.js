import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import ActiveView from './views/activeView';
import Active from './model/active';

var Router = Backbone.Router.extend({
  routes: {
    '': 'showHome',
    'details/:id': 'showDetails'
  },

  showHome: function () {
    console.log('showHome');
    var activeView = new ActiveView({model: Active});
    activeView.render();
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
