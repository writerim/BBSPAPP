define(function( ){

  var f = Backbone.View.extend({
    el : '#place_tree',
    initialize : function(){
      this.listenTo( this.collection , 'add' , function(){
        $(this.$el).jstree(true).settings.data = Places.getDataJstree();
        $(this.$el).jstree("refresh");
      })
      this.listenTo( this.collection , 'remove' , function(){
        $(this.$el).jstree(true).settings.data = Places.getDataJstree();
        $(this.$el).jstree("refresh");
      })
      this.render()
    },
    collection : Places,
    render : function(){
      var self = this
      $(this.$el).jstree({ 'core' : {
          data : Places.getDataJstree()
      } }).on('ready.jstree' , function( e,data ){
        if( self.model ){
          data.instance.open_node("place_tree_" + self.model.get('id') )
          data.instance._open_to("place_tree_" + self.model.get('id') )
        }
      })
    }
  })

  return f

})
