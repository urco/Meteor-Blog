//layout general messages
Router.route('/', function () {
   this.layout('layoutHome');
  
   this.render('layoutPortfolio', {
    to:"layoutPortfolio"
   });
});

Router.route('/blog', function () {
  this.layout('layoutIndex');

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

