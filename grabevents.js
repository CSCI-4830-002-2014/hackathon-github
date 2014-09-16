var GitHubApi = require("github");
var async = require("async");
 
var github = new GitHubApi({
    version: "3.0.0",
    timeout: 5000
});
 
function getClassEventsForPage(i, callback){
	github.events.getFromOrg({
	    org: "CSCI-4830-002-2014",
	    page: i,
	}, callback);
};
 
function flatten_fast(input){

var flattened=[];
	for (var i=0; i<input.length; ++i) {
	    var current = input[i];
	    for (var j=0; j<current.length; ++j)
	        flattened.push(current[j]);
	}
	return flattened;
}
 
async.map([1,2,3,4,5,6,7,8,9,10], getClassEventsForPage, function(err, results){
	flattened = flatten_fast(results);    
	console.log(JSON.stringify(flattened, undefined, 4));
});
