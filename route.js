//layout general messages

Router.configure ({ 
  progressSpinner : true,	
  progressDebug: true,	
  layoutTemplate: 'globalLayout'
 
});

Router._filters = {
  resetScroll: function () {
    var scrollTo = window.currentScroll || 0;
    $('body').scrollTop(scrollTo);
    $('body').css("min-height", 0);
  }
};

var filters = Router._filters;

if(Meteor.isClient) {
  Router.onAfterAction(filters.resetScroll); // for all pages
}

Router.onBeforeAction(function (pause) {
  if (this.ready()) {
  	this.next();
    } else {
    console.log('loading...');
    this.pause; // otherwise the action will just render the main template.
	}
});

Router.route('/', function () {
  this.redirect('/portfolio');
});

Router.route('/portfolio', function() {
   this.render('layoutPortfolio');
   });

Router.route('/blog', function () {
   this.render('layoutIndexBlog');
});


Router.route('/users', function () { 
  this.render('users');

});

