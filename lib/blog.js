Blog.config({
	 
	 adminRole: 'blogAdmin',
	 authorRole: 'blogAuthor',

     blogIndexTemplate: 'layoutIndexBlog', // '/blog' route
  	 blogShowTemplate: 'layoutBlog',    // '/blog/:slug' route*/

	 basePath: '/', // '/myBlog', '/myBlog/my-post', '/myBlog/tag/whatever', etc.
	 /*adminBasePath: '/myblog',*/
	 title: "Portfolio Website",

	  rss: {
	    title: 'My Portfolio Website',
	    description: 'This is an example of a portfolio website'
	  }

});
