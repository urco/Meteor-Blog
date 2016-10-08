Meteor.startup(function () {
        
         ServiceConfiguration.configurations.update(
              { "service": "facebook" },
              {
                $set: {
                  "appId": "1062614360451418",
                  "secret": "9e86a083e92b1652f752353f314b21c6"
                }
              },

              { upsert: true }
            );
          ServiceConfiguration.configurations.update(
              { "service": "google" },
              {
                $set: {
                  "clientId": "463538768518-fs83s2hui43fisk64hkt3j0t4ffev0sm.apps.googleusercontent.com",
                  "secret": "MIC6A0uUNlB-Tik3-RqwHu5N"
                }
              },
              { upsert: true }
            );
        
        // bootstrap the admin user if they exist -- You'll be replacing the id later
        if (Meteor.users.findOne("2AdWGzMbTmAMpqNx2"))
            Roles.addUsersToRoles("2AdWGzMbTmAMpqNx2", ['admin', 'blogAdmin']);

        // create a couple of roles if they don't already exist (THESE ARE NOT NEEDED -- just for the demo)
        if(!Meteor.roles.findOne({name: "secret"}))
            Roles.createRole("secret");

        if(!Meteor.roles.findOne({name: "double-secret"}))
            Roles.createRole("double-secret");
    });

service: 'google'
  clientId: '8732432343841634324-234239j7df91mg5a8232wq75cgdsff38ekoj.apps.googleusercontent.com'
  secret: 'e8sdf4dsST-VfsdSAXUh8HHSSWLJDSJ'