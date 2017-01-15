define([
  "text!./tpl/meter/del_modal.html",
  ],function( tpl ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#meter_modal_del',
    template : '#meter_modal_del_tpl',
    initialize : function(){
      this.render()
    },
    render : function(){
      var self = this
      $(this.$el).append(
        $(this.template).tmpl({
          model : self.model
        })
      ).dialog({
        modal : true,
        close : function(){
          $(self.$el).empty()
          $(this).dialog('destroy')
        },
        buttons : [{
          text : "Нет",
          click : function(){
            $(self.$el).empty()
            $(this).dialog('destroy')
          }
        },{
          text : "Да",
          click : function(){
            Meters.remove({id : self.model.id })
            $(self.$el).empty()
            $(this).dialog('destroy')
          }
        }]
      })
    }
  })

  return f

})
