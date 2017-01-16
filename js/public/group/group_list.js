define([
  "text!./tpl/group/group_list.html",
  "menu_item_tpl",
],function( tpl , mm ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#page',
    template : '#group_list_tpl',
    initialize : function(){
      this.render()
    },
    render : function(){
      $( this.$el ).empty().append(
        $(this.template).tmpl()
      )
      new mm();
    }
  })

  return f
});
