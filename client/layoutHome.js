
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