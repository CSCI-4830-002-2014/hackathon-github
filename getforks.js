var GitHubApi = require("github");
var async = require("async");
 
var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});
 
function getForksForChallengeWeek(i, callback) {
	github.repos.getForks({
	    user: "CSCI-4830-002-2014",
	    repo: "challenge-week-" + i
	}, callback);
};
 
// [ [a,a,a], [b,b,b], ... ] -> [a,a,a,b,b,b, ... ]
function flatten_slow(input){	
    return input.reduce(function(a, b) {
    	return a.concat(b);
	}, []);
}
 
async.map([1,2,3], getForksForChallengeWeek, function(err, results){
	flattened = flatten_slow(results);    
	console.log(JSON.stringify(flattened, undefined, 4));
});
