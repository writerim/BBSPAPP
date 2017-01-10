var MenuItem = Backbone.Model.extend({
  defaults : {
    icon : "",
    name : "",
    href : "",
    class : ""
  },
  idAttribute : '_id',
  setActive : function(){
    MenuCollect.toArray().map(function(m){
      if( m.cid != this.cid ) m.set('is_active' , false)
    },this)
    this.set('is_active' , true)
    ViewMainMenu()
  }
})

var MenuCollect = Backbone.Collection.extend({
  model : MenuItem,
})
MenuCollect = new MenuCollect()


// initialize
MenuCollect.add([
  {_id : "place"        ,href : "#place"               , class : 'maps'       , name : "Карты сети" , is_active : false },
  {_id : "converter"    ,href : "#converter"           , class : 'list'       , name : ""           , is_active : false },
  {_id : "vconverter"   ,href : "#vconverter"          , class : 'vmeter'     , name : ""           , is_active : false },
  {_id : "cconverter"   ,href : "#cconverter"          , class : 'cconverter' , name : ""           , is_active : false },
  {_id : "user"         ,href : "#user"                , class : 'users'      , name : ""           , is_active : false },
  {_id : "group"        ,href : "#group"               , class : 'group'      , name : ""           , is_active : false },
  {_id : "rule"         ,href : "#rule"                , class : 'ruleuser'   , name : ""           , is_active : false },
  {_id : "mail"         ,href : "#mail"                , class : 'mailto'     , name : ""           , is_active : false },
  {_id : "import_meter" ,href : "#meter/import/list/"  , class : 'archive'    , name : ""           , is_active : false },
  {_id : "working"      ,href : "#task/working/"       , class : 'run'        , name : ""           , is_active : false },
  {_id : "info_up"      ,href : "#info/up/"            , class : 'info'       , name : ""           , is_active : false },
  {_id : "logout"       ,href : "#logout"              , class : 'logout'     , name : ""           , is_active : false },
])

var Timer = Backbone.Model.extend({
  defaults : {
    hour    : new Date().getHours(),
    min     : new Date().getMinutes(),
    sec     : new Date().getSeconds(),
    day     : new Date().getDate(),
    monthS  : "",
    year    : new Date().getFullYear(),
    dayS    : "",
  },
  initialize : function(){
    setInterval( function() {
        Timer.set('sec' , Timer.get('sec')+1 );
        if(Timer.get('sec') == 60) {
          Timer.set('sec',0);
          Timer.set('min' , Timer.get('min')+1 );
        }
        if(Timer.get('min') == 60) {
          Timer.set('min',0);
          Timer.set('hour' , Timer.get('hour')+1 );
        }
        if(Timer.get('hour') == 24) {
          Timer.set('hour',0);
        }
    },1000);
  }
})

Timer = new Timer();
