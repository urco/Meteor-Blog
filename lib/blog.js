var mySubmitFunc = function(error, state){
  if (!error) {
    if (state === "signIn") {
      // Successfully logged in
      // ...
      Modal.hide('login');
    }
    if (state === "signUp") {
      // Successfully registered
      // ...
      Modal.hide('login');
    }
  }
};

var myPostLogout = function(){
    //example redirect after logout
    Modal.hide('login');
    console.log('saliendo');
    Meteor.logout();
}



Blog.config({
	 
	   dateFormat: 'MMM Do, YYYY',
	   adminRole:  'blogAdmin',
	   authorRole: 'blogAuthor',
     pageSize: 10,
     blogIndexTemplate: 'layoutIndexBlog', // '/blog' route
  	 blogShowTemplate: 'layoutBlog',    // '/blog/:slug' route
  	 basePath: '/blog', 
	   title: "Portfolio Website",
  	 comments: {
      	disqusShortname: 'myshortname'
    	},

	  rss: {
	    title: 'My blog',
	    description: 'blog Javi'
	  },  
});

AccountsTemplates.configure({
    onSubmitHook: mySubmitFunc,
    onLogoutHook: myPostLogout
});