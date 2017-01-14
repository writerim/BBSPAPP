define(function(e){

  var f = Backbone.View.extend({
    el : '#place_modal_delete',
    initialize : function(){
      this.render()
    },
    render : function(){
      var self = this

      var buttons = []
      if( self.model.childrenCount() > 0 ){
        buttons.push({
          text : "Закрыть",
          click : function(){
            $(this).dialog('destroy')
            $( self.$el ).empty()
          }
        })
      }else{
        buttons.push({
          text : 'Нет',
          click : function(){
            $(this).dialog('destroy')
            $( self.$el ).empty()
          }
        })
        buttons.push({
          text : "Да",
          click : function(){
            $(this).dialog('destroy')
            Places.remove( self.model.cid )
            $( self.$el ).empty()
          }
        })
      }

      $( this.$el ).text(
        function(){
          if( self.model.childrenCount() > 0 ){
            return "Нельзя удалить, пока есть вложенные элементы!"
          }
          return "Вы действиетльно хотите удалить?"
        }()
      ).dialog({
        width : 'auto',
        title : 'Внимание!',
        buttons : buttons
      })
    }
  })

  return f

})
