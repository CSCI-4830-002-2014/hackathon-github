var GitHubApi = require("github");
var async = require("async");
 
var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});
 
function getForksForChallengeWeek(i, callback) {
	github.events.getFromOrg({
	    org: "CSCI-4830-002-2014",
	    per_page: 99,
	    page: i
	}, callback);
};
 
// [ [a,a,a], [b,b,b], ... ] -> [a,a,a,b,b,b, ... ]
function flatten_slow(input){	
    return input.reduce(function(a, b) {
    	return a.concat(b);
	}, []);
}
 
async.map([1,2,3,4,5,6,7,8,9,10,11,12], getForksForChallengeWeek, function(err, results){
	flattened = flatten_slow(results);    
	console.log(JSON.stringify(flattened, undefined, 4));
});
