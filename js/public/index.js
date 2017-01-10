define(function(){
  return function(){
    var MenuView = Backbone.View.extend({
      el : '#page',
      template : '#templates__place_left',
      initialize : function(){
        this.render()
      },
      render : function(){
        $(this.$el).empty().append( $(this.template).tmpl({ list : MenuCollect.toJSON() }) )
      }
    })
    
    if( typeof App.Views.MenuView == 'undefined' ){
      App.Views.MenuView = new MenuView()
    }else{
      App.Views.MenuView.render()
    }
  }
});