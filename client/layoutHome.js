Meteor.subscribe('blog_posts');

ShareIt.init({
    siteOrder: ['facebook', 'twitter'],
    sites: {
      'facebook': {
        'appId': 'YOUR_APPLICATION_ID',
        'version': 'v2.3',
        //'buttonText': 'Share on FB'
      }
    },
    iconOnly: true,
    applyColors: false
  });

Template.header.helpers({
        // check if user is an admin
        isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        },
        isBlogUser:function(){
            if (Roles.userIsInRole(Meteor.user(), ['blogAuthor'])) {
                console.log("blogAuthor");
                return Roles.userIsInRole(Meteor.user(), ['blogAuthor']);
                 
                }
            if (Roles.userIsInRole(Meteor.user(), ['blogAdmin'])){
                 console.log("blogAdmin");
                 return Roles.userIsInRole(Meteor.user(), ['blogAdmin']);
                  
            }    
           } 
        });

Template.users.helpers({
        // check if user is an admin
        isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }
    });