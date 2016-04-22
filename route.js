//layout general messages
Router.route('/', function () {
  this.redirect('/portfolio');
});

Router.route('/portfolio', function () {
   this.layout('layoutHome');

   this.render('layoutPortfolio', {
    to:"layoutPortfolio"
   });   
});

/*
Router.route('/blog/:slug', function () {
  this.layout('detailsPost');
   console.log(this.params.slug);
   this.render('layoutPost', {
    to:"main",
     data:function(){
      return blog_posts.findOne({slug: this.params.slug});
    }
  });
});
*/ 


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

