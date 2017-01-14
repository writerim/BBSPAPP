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
  }
})

var ConverterModel = Backbone.Model.extend({
  defaults : {
    title : "",
    id : 0
  },
  childrenCount : function(){
    return 0;
  },
  getLink : function(){
    return "#converter/" + this.get('id')+"/"
  },
})

var ConverterCollect = Backbone.Collection.extend({
  model : ConverterModel
})
var Converters = new ConverterCollect()


var PlacesCollect = Backbone.Collection.extend({
  model : PlaceModel
})
Places = new PlacesCollect()


Places.add([{"id":5,"title":"child","place":3},{"place":0,"title":"1","id":1484383192619},{"place":0,"title":"2","id":1484383206367},{"place":0,"title":"3","id":1484383208958},{"place":0,"title":"4","id":1484383211785},{"place":1484383192619,"title":"1.1","id":1484383216966},{"place":1484383192619,"title":"1.2","id":1484383220949},{"place":1484383192619,"title":"1.3","id":1484383225606},{"place":1484383192619,"title":"1.4","id":1484383229559},{"place":1484383216966,"title":"1.1.1","id":1484383236237},{"place":1484383216966,"title":"1.1.2","id":1484383241412}])
