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

        converter_list      : './js/public/converter/index',              // Конверторы
        main_converter_table: './js/public/converter/main_converter_table',// Конверторы таблица
        converter_modal_add : './js/public/converter/converter_modal_add',// Конверторы таблица
        converter_modal_delete : './js/public/converter/converter_modal_delete',// Конверторы таблица
        converter_every     : './js/public/converter/converter_every',// Конверторы таблица
        meter_list          : './js/public/converter/meter_list',// Конверторы таблица

        meter_add_modal      : './js/public/meter/add_modal',// Конверторы таблица

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
        'converter/:id/'   : 'converter_every' ,
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

      converter_every : function(id){
        $(document).ready(function(){
          require(['converter_every'],function(d){
            new d({ model : Converters.get(id)})
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
