define(["text!./tpl/auth.html"],function( tpl ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#page',
    template : '#auth_tpl',
    initialize : function(){
      this.render()
    },
    events : {
      'click #login' : function(){
        Router.navigate('#place',Router.place())
      }
    },
    render : function(){
      $( this.$el ).empty().append(
        $(this.template).tmpl()
      )
    }
  })

  return f

})
