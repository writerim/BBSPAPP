require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  $(document).ready(function(){
    require(["text!module.html"],
        function(html) {
            console.log(html)
        }
    );
  })
});