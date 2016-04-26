
ShareIt.init({
    siteOrder: ['facebook', 'twitter'],
    sites: {
      'facebook': {
        'appId': 'YOUR_APPLICATION_ID',
        'version': 'v2.3',
        'buttonText': 'Share on FB'
      }
    },
    iconOnly: false,
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


WebFontConfig = {
    google: { families: [ 'Playfair+Display:400,700italic,400italic:latin','Open+Sans:400,400italic:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
    })();


