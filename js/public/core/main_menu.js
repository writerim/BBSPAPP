define(["text!" + PATHtpl + "core/main_menu.html"],function( tpl ){

  $('body').append( $(tpl) )

  var d = Backbone.View.extend({
    el : '#main_menu_container',
    template : '#main_menu',
    initialize : function(){
      this.render()
    },
    collection : MenuLists,
    render : function(){
      $( this.$el ).empty().append(
        $(this.template).tmpl({
          list : this.collection.toArray()
        })
      )
    }
  })

  return d

})
