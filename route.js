//layout general messages

Router.route('/', function () {
  this.layout('layoutHome');

   this.render('header', {
    to:"header"
  });

   this.render('layoutIndexBlog', {
   		to:"layoutIndexBlog"
   });

});


Router.route('/users', function () {
  this.layout('layoutUsers');

   this.render('header', {
    to:"header"
  });

   this.render('users', {
   		to:"users"
   });

});

