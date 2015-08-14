Router.route("/", function() {
 this.render("home", {
  data: function() {
   return {
   }
  }
 });
}, { 
  name: "home", 
  fastRender: true
});