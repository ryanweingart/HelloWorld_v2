

var User = require("../models/User");


module.exports = {
    get: function(query, callback) {
        User.find(query).sort({
            _id: -1
        }).exec(function(err, doc) {
            callback(doc);
        });
        },

    save: function(data, callback) {
            var newUser = {
                firstName : data.firstName,  
                lastName : data.lastName,
                userName : data.userName,
                password : data.password,
                joinedCommunityIDs : data.joinedCommunityIDs,
                ownedCommunityIDs : data.ownedCommunityIDs,
                bannedCommunityIDs : data.bannedCommunityIDs,
                isAdmin : data.isAdmin,
                favoriteCommunityIDs : data.favoriteCommunityIDs,
                friends : data.friends,
                email : data.email
            };

            User.create(newUser, function (err, doc) {
                if (err) {
                    console.log(err);
                }

                else {
                    console.log(doc);
                    callback(doc);
                }
            });
        },

    delete: function(data, callback) {
            User.remove({username: data.username}, callback);
        },
    
        
    addCommunity: function(data, callback) {
          
            switch(data.type) {
            case "joinedCommunity":
                    User.update({username: data.username}, {$push: {joinedCommunityIDs: data.communityName}}, {}, callback);
            break;
            case "ownedCommunity":
                    User.update({username: data.username}, {$push: {ownedCommunityIDs: data.communityName}}, {}, callback);
            break;
            case "bannedCommunity":
                    User.update({username: data.username}, {$push: {bannedCommunityIDs: data.communityName}}, {}, callback);
            break;
            case "favoriteCommunity":
                    User.update({username: data.username}, {$push: {favoriteCommunityIDs: data.communityName}}, {}, callback);
            break;
           }         
        },


    removeCommunity: function(data, callback) {
        switch(data.type) {
            case "joinedCommunity":
                    User.update({username: data.username}, {$pull: {joinedCommunityIDs: data.communityName}}, {}, callback);
            break;
            case "ownedCommunity":
                    User.update({username: data.username}, {$pull: {ownedCommunityIDs: data.communityName}}, {}, callback);
            break;
            case "bannedCommunity":
                    User.update({username: data.username}, {$pull: {bannedCommunityIDs: data.communityName}}, {}, callback);
            break;
            case "favoriteCommunity":
                    User.update({username: data.username}, {$pull: {favoriteCommunityIDs: data.communityName}}, {}, callback);
            break;
           }
    }
        
    };

    
    //db.getCollection('users').update({username: test1}, {$push: {joinedCommunityIDs: 4567}})