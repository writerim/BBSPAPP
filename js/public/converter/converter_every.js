define([
  "text!./tpl/converter/converter_every.html",
  "menu_item_tpl",
  "breads",
  "meter_list",
  ],function( tpl , mm , breads , meter_list ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#page',
    template : '#converter_every_tpl',
    initialize : function(){
      this.render()
    },
    model : ConverterModel,
    render : function(){
      if( typeof this.model == 'undefined' ){
        Error404()
        return false;
      }
      $( this.$el ).empty().append(
        $(this.template).tmpl({
          Converter : this.model
        })
      )
      new breads( [{
        name : "Главная",
        href:""
      }] )
      new mm()
      new meter_list({ collection : Meters , model : this.model  })
    }
  })

  return f

})
