requirejs.config({
    paths:{
        jquery      : './jquery'      ,
        underscore  : './underscore'  ,
        backbone    : './backbone'    ,
        tmpl        : './tmpl'        ,
        model       : './model'        ,
    },
    shim: {
        jquery: {
          exports: '$',
        },
        tmpl: {
          deps:["jquery"],
          exports: '$.tmpl',
        },
        underscore: {
          deps:["jquery"],
          exports: '_'
        },
        backbone: {
          deps: ["underscore", "jquery"],
          exports: "Backbone"
        },
        model: {
          deps: ["backbone"]
        }
    },
    //~ urlArgs : "bust="+new Date().getTime()
});

const PATHtpl = "./../../tpl"
const PATHjs  = "./../../js/public"

var App = {
    Views : {}
  }

require(['jquery', 'underscore', 'backbone','tmpl' , 'model'], function ( $ , _ , Backbone ) {
  
  $.fn.Append = function( args ){
    if( $(args).attr('id') ){
      if( $('#' + $(args).attr('id')).length ){
        return false;
      }
    }
    $(this).append( $(args) )
  }
  
  Backbone.Router.prototype.before = function () {};
  Backbone.Router.prototype.after = function () {};

  Backbone.Router.prototype.route = function (route, name, callback) {
    if (!_.isRegExp(route)) route = this._routeToRegExp(route);
    if (_.isFunction(name)) {
      callback = name;
      name = '';
    }
    if (!callback) callback = this[name];

    var router = this;

    Backbone.history.route(route, function(fragment) {
      var args = router._extractParameters(route, fragment);

      router.before.apply(router, arguments);
      callback && callback.apply(router, args);
      router.after.apply(router, arguments);

      router.trigger.apply(router, ['route:' + name].concat(args));
      router.trigger('route', name, args);
      Backbone.history.trigger('route', router, name, args);
    });
    return this;
  };
  
  
  var AppRouter = Backbone.Router.extend({
    
      
      routes: {
        ''      : 'index' ,
        'place' : 'place',
        'converter' : 'converter',
        'meter' : 'meter',
      },

      before: function () {
        $('#page').empty()
      },
      
      after : function(){
        //~ console.log('after')
      },
      
      
      index: function() {
        require([
          "text!./../../tpl/templates/place_left.html",
          "text!./../../tpl/index.html",
        ],
          function( templates , content ) {
            
            $('body').append( templates )
            $('body').append( content )
            require([PATHjs  + "/index"] , function( res ){
              res()
            });
          }
        )
      },
      
      place : function() {
        require([
          "text!./../../tpl/templates/place_left.html",
          "text!./../../tpl/index.html",
        ],
          function( templates , content ) {
            
            $('body').append( templates )
            $('body').append( content )
            require([PATHjs  + "/place/index"] , function( res ){
              res()
            });
          }
        )
      },
      
      
      converter : function() {
        require([
          "text!./../../tpl/templates/place_left.html",
          "text!./../../tpl/index.html",
        ],
          function( templates , content ) {
            
            $('body').append( templates )
            $('body').append( content )
            require([PATHjs  + "/converter/index"] , function( res ){
              res()
            });
          }
        )
      },
      
      
      meter : function() {
        require([
          "text!./../../tpl/templates/place_left.html",
          "text!./../../tpl/index.html",
        ],
          function( templates , content ) {
            
            $('body').append( templates )
            $('body').append( content )
            require([PATHjs  + "/meter/index"] , function( res ){
              res()
            });
          }
        )
      },
      
      
  });
  new AppRouter();
  Backbone.history.start({ root: "/dev/simplePage/" });
    
});