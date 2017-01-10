const PATHApp = "/dev/simplePage/"
const PATHtpl = PATHApp + "tpl/"
const PATHjs  = PATHApp + "js/public/"

var Router,Backbone,$

requirejs.config({
    paths:{
        jquery      : './js/core/jquery'      ,
        underscore  : './js/core/underscore'  ,
        backbone    : './js/core/backbone'    ,
        tmpl        : './js/core/tmpl'        ,
        text        : './js/core/text'        ,
        model       : './js/core/model'       ,
        templates   : './js/core/templates'   ,
        containers  : './js/core/containers'  ,
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
        },
        templates: {
          deps: ["backbone","jquery"]
        },
        containers: {
          deps: ["backbone","jquery"]
        },
    },
    baseUrl : PATHApp
});

var App = {
  Views : {}
}

require(['jquery', 'underscore', 'backbone','tmpl' , 'model' , 'templates' , 'containers'], function ( $ , _ , Backbone ) {
  
  
  var AppRouter = Backbone.Router.extend({
      
      routes: {
        ''          : 'auth'      ,
        '#'         : 'auth'      ,
        'place'     : 'place'     ,
        'converter' : 'converter' ,
        'meter'     : 'meter'     ,
        'logout'    : 'logout'    ,
      },
      
      
      auth: function() {
        TemplatesAuth()
      },
      
      place : function() {
        MenuCollect.get("place").setActive()
        TemplatesPlaceList()
      },
      
      converter : function() {
        MenuCollect.get("converter").setActive()
        //~ TemplatesPlaceList()
      },
      
      logout : function(){
        //~ Router.navigate('', {trigger: true,replace: true})
        window.location.hash = ""
      }
      
      
      
      
  });
  Router = new AppRouter();
  Backbone.history.start({ root: PATHApp });
    
});