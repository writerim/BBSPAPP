define([
  "text!./tpl/user/user_list.html",
  "menu_item_tpl",
  "user_table",
],function( tpl , mm , table ){

  $('body').append( $(tpl) )

  var f = Backbone.View.extend({
    el : '#page',
    template : '#user_list_tpl',
    initialize : function(){
      this.render()
    },
    render : function(){
      $( this.$el ).empty().append(
        $(this.template).tmpl()
      )
      new mm();
      new table({ collection : Users });
    }
  })

  return f
});
