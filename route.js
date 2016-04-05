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

Router.route('/:slug', function () {
  this.layout('layoutPost');
   
   this.render('header', {
    to:"header"
  });

  this.render('layoutBlog', {
    to: "layoutBlog",
    data:function(){
      console.log(this.params.slug);
      return blog_posts.findOne({slug:this.params.slug});
    }
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

