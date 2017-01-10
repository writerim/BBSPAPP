var MenuItem = Backbone.Model.extend({
  defaults : {
    icon : "",
    name : "",
    href : "",
    class : ""
  }
})

var MenuCollect = Backbone.Collection.extend({
  model : MenuItem
})
MenuCollect = new MenuCollect()


// initialize
MenuCollect.add([
  {href : "#place"               , class : 'maps'       , name : "Карты сети"},
  {href : "#converter"           , class : 'list'       , name : ""},
  /*
  {href : "#vconverter"          , class : 'vmeter'     , name : ""},
  {href : "#cconverter"          , class : 'cconverter' , name : ""},
  {href : "#user"                , class : 'users'      , name : ""},
  {href : "#group"               , class : 'group'      , name : ""},
  {href : "#rule"                , class : 'ruleuser'   , name : ""},
  {href : "#mail"                , class : 'mailto'     , name : ""},
  {href : "#meter/import/list/"  , class : 'archive'    , name : ""},
  {href : "#task/working/"       , class : 'run'        , name : ""},
  {href : "#info/up/"            , class : 'info'       , name : ""},
  {href : "#logout"              , class : 'maps'       , name : ""},
  */
])