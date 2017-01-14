define([
  "text!./tpl/place/index.html",
  "menu_item_tpl",
  "main_place_table",
  ],function( tpl , mm , table ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#page',
    template : '#place_tpl',
    initialize : function(){
      this.render()
    },
    render : function(){
      $( this.$el ).empty().append(
        $(this.template).tmpl()
      )
      new mm();
      new table();
    }
  })

  return f

})
