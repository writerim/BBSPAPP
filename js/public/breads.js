define([
  "text!./tpl/core/breads.html",
  ],function( tpl ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#breads',
    template : '#breads_tpl',
    initialize : function(){
      this.render()
    },
    render : function(){
      this.options.unshift({
        title : "Главная",
        href : "#place"
      })
      $( this.$el ).empty().append(
        $(this.template).tmpl({list : this.options })
      )
    }
  })

  return f

})
