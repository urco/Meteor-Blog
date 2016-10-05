Blog.config({
	 
	 dateFormat: 'MMM Do, YYYY',

	 adminRole: 'blogAdmin',
	 authorRole: 'blogAuthor',

     blogIndexTemplate: 'layoutIndexBlog', // '/blog' route
  	 blogShowTemplate: 'layoutBlog',    // '/blog/:slug' route*/
  	 //blogLayoutTemplate:'layoutPost',
	 basePath: '/blog', 
	 title: "Portfolio Website",
	 comments: {
    	disqusShortname: 'myshortname'
  	},

	  rss: {
	    title: 'My blog',
	    description: 'blog Javi'
	  }
});