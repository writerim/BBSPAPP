define([
  "text!./tpl/404.html",
  ],function( tpl ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#page',
    template : '#404_tpl',
    initialize : function(){
      this.render()
    },
    render : function(){
      $( this.$el ).empty().append(
        $(this.template).tmpl()
      )
    }
  })

  return f

})
