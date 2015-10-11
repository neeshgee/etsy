import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Active from '../model/active';

var ActiveView = Backbone.View.extend({
  template: _.template($('#activeTemplate').text()),
  render: function () {
    console.log('active');
    $('.container').html(this.template(this.model.attributes))
  },

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    // this.model.fetch();
  }
});

export default ActiveView;
