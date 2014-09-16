var GitHubApi = require("github");
var async = require("async");
 
var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});
 
function getClassEventsForPage(i, callback){
	github.events.getFromOrg({
		org: "CSCI-4830-002-2014",
		page: i,
		per_page: 100
	}, callback);
};
 
// [ [a,a,a], [b,b,b], ... ] -> [a,a,a,b,b,b, ... ]
function flatten_fast(input){	
// TODO: Use a faster implementation
// (ref: http://jsperf.com/flatten-an-array-loop-vs-reduce)
	var flattened = [];
	for (var i=0; i<input.length; ++i) {
    	var current = input[i];
    	for (var j=0; j<current.length; ++j)
       		flattened.push(current[j]);
	}
	return flattened;
}
 
async.map([1,2,3,4,5], getClassEventsForPage, function(err, results){
	// TODO: This must be implemented
	flattened = flatten_fast(results);    
	console.log(JSON.stringify(flattened, undefined, 4));
});
