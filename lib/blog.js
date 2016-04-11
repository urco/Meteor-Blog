Blog.config({
	 
	 dateFormat: 'MMM Do, YYYY',

	 adminRole: 'blogAdmin',
	 authorRole: 'blogAuthor',

     blogIndexTemplate: 'layoutIndexBlog', // '/blog' route
  	 //blogShowTemplate: 'layoutPost',    // '/blog/:slug' route*/
  	 blogLayoutTemplate:'layoutPost',
	 basePath: '/', 
	 title: "Portfolio Website",

	  rss: {
	    title: 'My blog',
	    description: 'blog Javi'
	  }

});
