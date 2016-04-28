//layout general messages

Router.configure ({ 
  layoutTemplate: 'globalLayout',
  loadingTemplate: 'loading',

});

Router.route('/', function () {
  this.redirect('/portfolio');
});

Router.route('/portfolio', function() {
   //this.layout('globalLayout');
 
   this.render('layoutPortfolio');

});


Router.route('/blog', function () {
   //this.layout('globalLayout');

   this.render('layoutIndexBlog');
});

Router.route('/users', function () {
  //this.layout('globalLayout');

   this.render('users');
});

