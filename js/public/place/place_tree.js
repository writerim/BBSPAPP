define(function( ){

  var f = Backbone.View.extend({
    el : '#place_tree',
    initialize : function(){
      this.listenTo( this.collection , 'add' , function(){
        $(this.$el).jstree(true).settings.core.data = Places.getDataJstree();
        $(this.$el).jstree("refresh");
      })
      this.listenTo( this.collection , 'remove' , function(){
        $(this.$el).jstree(true).settings.core.data = Places.getDataJstree();
        $(this.$el).jstree("refresh");
      })
      this.render()
    },
    collection : Places,
    render : function(){
      $(this.$el).jstree({ 'core' : {
          data : Places.getDataJstree()
      } });
    }
  })

  return f

})
