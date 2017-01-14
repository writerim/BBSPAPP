define([
  "text!./tpl/place/place_modal_add.html",
  ],function( tpl ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#modal_place_add',
    template : '#place_modal_add_tpl',
    initialize : function(){
      this.render()
    },
    model : PlaceModel,
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
            Places.add({
              place: Number(self.model.id||0),
              title : $('#new_place_add').val(),
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
