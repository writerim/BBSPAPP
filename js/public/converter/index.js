define([
  "text!./tpl/converter/index.html",
  "menu_item_tpl",
  "main_converter_table",
  ],function( tpl , mm , table ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#page',
    template : '#converter_list_tpl',
    initialize : function(){
      this.render()
    },
    render : function(){
      $( this.$el ).empty().append(
        $(this.template).tmpl()
      )
      new mm()
      new table({ collection : Converters })
    }
  })

  return f

})
