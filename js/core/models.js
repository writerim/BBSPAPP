var MenuItem = Backbone.Model.extend({
  defaults : {
    name : "",
    href : ""
  }
})

var MenuLists = Backbone.Collection.extend({
  model : MenuItem
})
MenuLists = new MenuLists()

// Синхронизация
MenuLists.add([
  {name : "Места" ,href : "place"},
  {name : "Конверторы" ,href : "converter"},
  {name : "Выйти" , href : ""},
])


var PlaceModel = Backbone.Model.extend({
  defaults : {
    id    : "",
    place : 0,
    title : "",
  },
  idAttribute : "id",
  getLink : function(){
    return "#place/" + this.get('id')+"/"
  },
  childrenCount : function(){
    return Places.where({place : this.id}).length;
  },
  getParent : function(){
    return Places.findWhere({ id : Number(this.get('place')) })
  },
})

//~ Модель конвертора
var ConverterModel = Backbone.Model.extend({
  defaults : {
    id : 0,
    title : "",
    ip : "",
    port : "",
  },
  childrenCount : function(){
    return 0;
  },
  getLink : function(){
    return "#converter/" + this.get('id')+"/"
  },
})

var MeterModel = Backbone.Model.extend({
  defaults : {
    id : 0,
    converter : 0,
    title : "",
    ip : "",
    port : ""
  },
  getLink : function(){
    return "#meter/" + this.get('id')+"/"
  }
})

var MeterCollection = Backbone.Collection.extend({
  model : MeterModel
})
var Meters = new MeterCollection()


var ConverterCollect = Backbone.Collection.extend({
  model : ConverterModel
})
var Converters = new ConverterCollect()


var PlacesCollect = Backbone.Collection.extend({
  model : PlaceModel,
  // построение дерева
  getDataJstree : function(){
    var tree = [];
    this.toArray().sort(function(a,b) {
      if( a.get("place") == b.get('place') ) return 0;
      return a.get("place") > b.get('place') ? 1 : -1
    }).map(function(m){
      tree.push({
        id : "place_tree_" + m.get('id'),
        text : m.get('title'),
        parent : m.get('place') == 0 ? "#" : "place_tree_" + m.get('place'),
      })
    })
    return tree
  }
})
Places = new PlacesCollect()


Places.add([{"place":0,"title":"1","id":1484383192619},{"place":0,"title":"2","id":1484383206367},{"place":0,"title":"3","id":1484383208958},{"place":0,"title":"4","id":1484383211785},{"place":1484383192619,"title":"1.1","id":1484383216966},{"place":1484383192619,"title":"1.2","id":1484383220949},{"place":1484383192619,"title":"1.3","id":1484383225606},{"place":1484383192619,"title":"1.4","id":1484383229559},{"place":1484383216966,"title":"1.1.1","id":1484383236237},{"place":1484383216966,"title":"1.1.2","id":1484383241412}])
Converters.add([{"title":"qqqq","id":1484413137663,"ip":"","port":""}])
Meters.add([{id:1484469244191 , converter : 1484413137663 , title : "wwwww"}])
