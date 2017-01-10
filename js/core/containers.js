// Главное меню

var ViewMainMenu = function(){
  
  if( !$('#container__main_menu').length ){
    require(["text!" + PATHtpl + "container/main_menu.html"],function( text ){
      $(text).appendTo('body')
      ViewMainMenu()
    })
    return false;
  }
  
  var d = Backbone.View.extend({
    el : '#left_menu',
    template : '#container__main_menu',
    initialize : function(){
      this.render()
    },
    collection : MenuCollect,
    render : function(){
      $(this.$el).empty().append( $(this.template).tmpl({ list : this.collection.toJSON() }) )
    },
  })
  new d()
  
  ViewTimer()
  
}



var ViewMainBreads = function(){
  if( !$('#container__main_breads').length ){
    require(["text!" + PATHtpl + "container/main_breads.html"],function( text ){
      $(text).appendTo('body')
      ViewMainBreads()
    })
    return false;
  }
  
  var d = Backbone.View.extend({
    el : '#breads',
    template : '#container__main_breads',
    initialize : function(){
      this.render()
    },
    render : function(){
      $(this.$el).empty().append( $(this.template).tmpl() )
    },
  })
  new d()
}


var ViewTimer = function(){
  if( !$('#container__timer').length ){
    require(["text!" + PATHtpl + "container/timer.html"],function( text ){
      $(text).appendTo('body')
      ViewMainMenu()
    })
    return false;
  }
  
  var d = Backbone.View.extend({
    el : '#loginprev',
    template : '#container__timer',
    initialize : function(){
      this.listenTo( this.model , 'change' , this.render )
      this.render()
    },
    model : Timer,
    render : function(){
      $('#timer_date, #timer_time').remove();
      $(this.$el).after( $(this.template).tmpl({ timer : this.model }) )
    },
  })
  new d()
}