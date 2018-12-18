var friends_data = require("../data/friends.json");

var friends = {
    all: function() {
        return friends_data;
    },
    match: function(data) {
        var last = Number.MAX_SAFE_INTEGER;
        var perfectMatch;
        var userScores = data["scores[]"];
        for (var i in friends_data) {
            var compScore = 0;
            for (var j in friends_data[i].scores) {
                compScore += Math.abs(parseInt(friends_data[i].scores[j]) - parseInt(userScores[j]));
            }
            if (compScore < last){
                last = compScore;
                perfectMatch = friends_data[i];
            }
        }
        // save to db ???
        // console.log(data.name)
        // console.log(data.photo)
        // console.log(data["scores[]"])

        return perfectMatch;
    }
};

module.exports = friends;