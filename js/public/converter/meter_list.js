define([
  "text!./tpl/converter/meter_list.html",
  "meter_add_modal",
  "meter_del_modal",
  ],function( tpl , add_modal , del_modal ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#meter_list',
    template : '#meter_list_tpl',
    initialize : function(){
      this.listenTo( Meters , 'add' , this.render )
      this.listenTo( Meters , 'remove' , this.render )
      this.render()
    },
    events : {
      'click #add_meter' : function(){
        new add_modal({ model : this.model })
      },
      'click .delete_meter' : function( e ){
        new del_modal({ model : Meters.find({ id : Number($(e.target).attr('id').replace('delete_modal_',"")) }) })
      }
    },
    render : function(){
      $( this.$el ).empty().append(
        $(this.template).tmpl({
          meters : new MeterCollection( _.where(Meters.toJSON() , { converter : Number(this.model.id) }) ).toArray()
        })
      )
    }
  })

  return f

})
