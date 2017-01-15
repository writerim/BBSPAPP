define([
  "text!./tpl/place/index.html",
  "menu_item_tpl",
  "main_place_table",
  "place_tree",
  "jstree"
  ],function( tpl , mm , table , tree ){

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
      new tree()
    }
  })

  return f

})
