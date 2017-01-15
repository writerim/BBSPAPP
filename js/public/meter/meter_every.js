define([
  "text!./tpl/meter/meter_every.html",
  "menu_item_tpl",
  "breads",
  "jstree"
  ],function( tpl , mm , breads ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#page',
    template : '#meter_every_tpl',
    initialize : function(){
      this.render()
    },
    render : function(){
      $(this.$el).empty().append(
        $(this.template).tmpl({
          Meter : this.model
        })
      )
      new mm()
      new breads([])
    }
  })

  return f

})
