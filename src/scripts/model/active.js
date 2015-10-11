import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';


var API_ROOT = 'https://openapi.etsy.com/v2/listings/active.js?api_key=bnivjr7o4dzhv7t39d6gxff0&callback=?';

var Active = Backbone.Model.extend({
  url:function () {
    return API_ROOT;
  }
});

export default Active;
