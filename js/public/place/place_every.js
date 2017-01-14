define([
  "text!./tpl/place/place_every.html",
  "menu_item_tpl",
  "main_place_table",
  "breads",
  ],function( tpl , mm , place_list , breads ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#page',
    template : '#place_every',
    initialize : function(){
      this.render()
    },
    model : PlaceModel,
    render : function(){
      if( typeof this.model == 'undefined' ){
        Error404()
        return false;
      }
      $( this.$el ).empty().append(
        $(this.template).tmpl({
          Place : this.model
        })
      )
      new breads( [ this.model.getParent() ] )
      new mm()
      new place_list({model : this.model })
    }
  })

  return f

})
