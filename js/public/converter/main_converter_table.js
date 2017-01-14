define([
  "text!./tpl/converter/main_converter_table.html",
  "converter_modal_add",
  //~ "place_modal_delete",
  ],function( tpl , modal , del ){

  $('body').append( $(tpl) )


  var f = Backbone.View.extend({
    el : '#table_all_converters',
    template : '#main_converter_table_tpl',
    initialize : function(){
      this.listenTo( this.collection , 'remove' , this.render )
      this.listenTo( this.collection , 'add' , this.render )
      this.render()
    },
    collection : Converters,
    model : ConverterModel,
    events : {
      'click .delete_place' : function( e ){
        var id = Number( $(e.target).attr('id').replace('main_place_table_','') )
        new del({model : this.collection.find({ id : id}) })
      },
      'click #add_place' : function(){
        new modal({model : this.model});
      }
    },
    render : function(){
      var pl = typeof this.model.id != 'undefined' ? this.model.id : 0
      $( this.$el ).empty().append(
        $(this.template).tmpl({
          converters : this.collection.toArray()
        })
      )
    }
  })

  return f

})
