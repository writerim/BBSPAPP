const PATHApp = "/"
const PATHtpl = PATHApp + "tpl/"
const PATHjs  = PATHApp + "js/public/"

var Router,Backbone,$

function Error404(){
  Router.navigate("#404")
  Router.Error404()
}

requirejs.config({
    paths:{
        jquery              : './js/core/jquery'        ,
        underscore          : './js/core/underscore'    ,
        backbone            : './js/core/backbone'      ,
        models              : './js/core/models'      ,
        tmpl                : './js/core/tmpl'          ,
        text                : './js/core/text'          ,
        ui                  : './js/core/jquery.ui',

        404                 : './js/public/404',

        menu_item_tpl       : './js/public/core/main_menu' ,              // Главное меню
        breads              : './js/public/breads'      ,                 // ГХлебные крошки

        auth                : './js/public/auth/index',                   // Стартовая страница авторизации

        place_list          : './js/public/place/index',                  // Стартовая страница мест
        main_place_table    : './js/public/place/main_place_table',       // Таблица плейсов
        place_modal_add     : './js/public/place/place_modal_add',        // модальное окно плейсов
        place_modal_delete  : './js/public/place/place_modal_delete',     // модальное окно для удаления плейсов
        place_every         : './js/public/place/place_every',            // Вывод каждого плейса

    },
    shim: {
        jquery: {
          exports: '$',
        },
        ui: {
          deps:["jquery"]
        },
        tmpl: {
          deps:["jquery","backbone","models"],
          exports: '$.tmpl',
        },
        models : {
          deps:["backbone"],
        },
        underscore: {
          deps:["jquery"],
          exports: '_'
        },
        backbone: {
          deps: ["underscore", "jquery"],
          exports: "Backbone"
        },
        404 : {
          deps : ["tmpl"]
        },
        menu_item_tpl : {
          exports: "MainMenuView"
        },
    },
    baseUrl : PATHApp
});

var App = {
  Views : {}
}

require(['jquery', 'underscore', 'backbone','tmpl'  , 'ui' , '404'], function ( $ , _ , Backbone ) {


  var AppRouter = Backbone.Router.extend({

      routes: {
        ''                : 'auth'      ,
        '#'               : 'auth'      ,
        'place'           : 'place'     ,
        'place/:id/'      : 'place_every'     ,
        'converter'       : 'converter' ,
        'meter'           : 'meter'     ,
        'logout'          : 'logout'    ,
        '404'             : 'Error404'    ,
      },


      auth: function() {
        $(document).ready(function(){
          require(['auth'],function(d){
            new d()
          })
        })
      },

      place : function() {
        $(document).ready(function(){
          require(['place_list'],function(d){
            new d()
          })
        })
      },

      place_every : function(id){
        $(document).ready(function(){
          require(['place_every'],function(d){
            new d({ model : Places.get(id)})
          })
        })
      },

      converter : function() {
        $(document).ready(function(){
          require(['converter_list'],function(d){
            new d()
          })
        })

      },

      logout : function(){
      },

      Error404 : function(){
        $(document).ready(function(){
          require(['404'],function(d){
            new d()
          })
        })
      }




  });
  Router = new AppRouter();
  Backbone.history.start({ root: PATHApp });

});
