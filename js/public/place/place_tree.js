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
      /*
      $(this.$el).jstree({
        'core' : {
          data : Places.getDataJstree()
        },
        "plugins" : [
          "contextmenu",
        ],
        'check_callback': true,
        "contextmenu":{
          "items": function($node) {
              var tree = $(self.$el).jstree(true);
              return {
                  "Create": {
                      "separator_before": false,
                      "separator_after": false,
                      "label": "Create",
                      "action": function (obj) {
                          $node = tree.create_node($node);
                          tree.edit($node);
                      }
                  },
                  "Rename": {
                      "separator_before": false,
                      "separator_after": false,
                      "label": "Rename",
                      "action": function (obj) {
                          tree.edit($node);
                      }
                  },
                  "Remove": {
                      "separator_before": false,
                      "separator_after": false,
                      "label": "Remove",
                      "action": function (obj) {
                          tree.delete_node($node);
                      }
                  }
              };
          }
      }

       }).on('ready.jstree' , function( e,data ){
        if( self.model ){
          data.instance.open_node("place_tree_" + self.model.get('id') )
          data.instance._open_to("place_tree_" + self.model.get('id') )
        }
      })
      */
    }
  })

  return f

})
