define([
  "text!./tpl/user/user_table.html",
],function( tpl  ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#user_table',
    template : '#user_table_tpl',
    initialize : function(){
      this.listenTo( this.collection , 'remove' , this.render )
      this.render()
    },
    events : {
      'click .delete_user' : function( e ){
        Users.remove( $(e.target).attr('id').replace('delete_user_','') )
      }
    },
    render : function(){
      $( this.$el ).empty().append(
        $(this.template).tmpl({
          users : this.collection.toArray()
        })
      )
    }
  })

  return f
});
