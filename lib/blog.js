Blog.config({
	 
	 dateFormat: 'MMM Do, YYYY',

	 adminRole: 'blogAdmin',
	 authorRole: 'blogAuthor',

     blogIndexTemplate: 'layoutIndexBlog', // '/blog' route
  	 //blogShowTemplate: 'layoutBlog',    // '/blog/:slug' route*/
  	 blogLayoutTemplate:'layoutBlog',
	 basePath: '/', 
	 title: "Portfolio Website",

	  rss: {
	    title: 'My blog',
	    description: 'blog Javi'
	  }

});
