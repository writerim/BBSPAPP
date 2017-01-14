define([
  "text!./tpl/meter/add_modal.html",
  ],function( tpl ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#meter_modal_add',
    template : '#meter_modal_add_tpl',
    initialize : function(){
      this.render()
    },
    render : function(){
      var self = this
      $( this.$el ).append( $(this.template).tmpl() ).dialog({
        modal : true,
        close : function(){
          $(self.$el).empty()
          $(this).dialog('destroy')
        },
        buttons : [{
          text : "Отменить",
          click : function(){
            $(self.$el).empty()
            $(this).dialog('destroy')
          }
        },{
          text : "Сохранить",
          click : function(){
            Meters.add({
              id : new Date().getTime(),
              title : $('#add_meter_title').val(),
              converter : Number(self.model.get('id'))
            })
            $(self.$el).empty()
            $(this).dialog('destroy')
          }
        }]
      })
    }
  })

  return f

})
