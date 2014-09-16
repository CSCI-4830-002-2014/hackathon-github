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
 
// [ [a,a,a], [b,b,b], ... ] -> [a,a,a,b,b,b, ... ]
/*
var flattened=[];
for (var i=0; i<input.length; ++i) {
    var current = input[i];
    for (var j=0; j<current.length; ++j)
        flattened.push(current[j]);
}
*/
function flatten_slow(input){
/*	
    return input.reduce(function(a, b) {
    	return a.concat(b);
	}, []);
*/
var flattened=[];
	for (var i=0; i<input.length; ++i) {
	    var current = input[i];
	    for (var j=0; j<current.length; ++j)
	        flattened.push(current[j]);
	}
	return flattened;
}
 
async.map([1,2,3,4,5,6,7,8,9,10], getClassEventsForPage, function(err, results){
	flattened = flatten_slow(results);    
	console.log(JSON.stringify(flattened, undefined, 4));
});
