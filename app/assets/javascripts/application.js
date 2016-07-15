//= require jquery/dist/jquery
//= require jquery-cookie/jquery.cookie
//= require jquery-deparam/jquery-deparam
//= require pubsub-js/src/pubsub
//= require j-toker/dist/jquery.j-toker
//= require_tree .

$.auth.configure({
  // By default, you only need to configure apiUrl
  // Note that if you put a '/' at the end of the link, there will be errors when calling the api
  apiUrl: 'http://localhost:3000'
})