define([
  "text!./tpl/converter/converter_modal_add.html",
  ],function( tpl ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#modal_converter_add',
    template : '#converter_modal_add_tpl',
    initialize : function(){
      this.render()
    },
    model : ConverterModel,
    render : function(){
      var self = this
      $( this.$el ).empty().append(
        $(this.template).tmpl({
          model : this.model
        })
      ).dialog({
        modal : true,
        buttons : [{
          text : 'Сохранить',
          click : function(){
            Converters.add({
              title : $('#new_converter_add').val(),
              id : new Date().getTime()
            })
            $(this).dialog('destroy')
            $( self.$el ).empty()
          }
        }]
      })
    }
  })

  return f

})
