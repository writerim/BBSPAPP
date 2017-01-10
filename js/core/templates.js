
// шаблон для отображени списка мест
var TemplatesPlaceList = function(){
  
  if( !$('#templates__place_left').length ){
    require(["text!" + PATHtpl + "templates/place_left.html"],function( text ){
      $(text).appendTo('body')
      TemplatesPlaceList()
    })
    return false;
  }
  
  var _PlaceTPL = Backbone.View.extend({
    el : '#page',
    template : '#templates__place_left',
    initialize : function(){
      this.render()
    },
    render : function(){
      $(this.$el).empty().append( $(this.template).tmpl() )
    },
  })
  new _PlaceTPL(); // Загрузка основного шаблона
  ViewMainMenu()   // Загрузка меню
  ViewMainBreads() // Хлебные крошки
}


// Шаблон для авторизации
var TemplatesAuth = function(){
  
  if( !$('#templates__auth').length ){
    require(["text!" + PATHtpl + "templates/auth.html"],function( text ){
      $(text).appendTo('body')
      TemplatesAuth()
    })
    return false;
  }
  
  var Auth = Backbone.View.extend({
    el : '#page',
    template : '#templates__auth',
    initialize : function(){
      this.render()
    },
    events : {
      'click #auth_sub' : function(){
        //~ Router.navigate('place', {trigger: true})
        window.location.hash = "place"
      }
    },
    render : function(){
      $(this.$el).empty().append( $(this.template).tmpl() )
    },
  })
  new Auth(); // Загрузка основного шаблона
}