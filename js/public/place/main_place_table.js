define([
  "text!./tpl/place/main_place_table.html",
  "place_modal_add",
  "place_modal_delete",
  ],function( tpl , modal , del ){

  $('body').append( $(tpl) )


  var f = Backbone.View.extend({
    el : '#table_all_places',
    template : '#main_place_table_tpl',
    initialize : function(){
      this.listenTo( this.collection , 'remove' , this.render )
      this.listenTo( this.collection , 'add' , this.render )
      this.render()
    },
    collection : Places,
    model : PlaceModel,
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
          places : new PlacesCollect( _.where(Places.toJSON() , { place : Number(pl) }) ).toArray()
        })
      )
    }
  })

  return f

})
