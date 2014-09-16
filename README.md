# Team Members

* [Peyman Mortazavi](https://github.com/peymanmortazavi)
* [Brian Newsom](https://github.com/BrianNewsom)
* [Adrian Chen](https://github.com/adrian-chen)
* [Sam ](https://github.com/sako0938)

# Objective 1. Node.js

[getevents.js](getevents.js)

# Objective 2. Reanalyze

### 2.a. What is the distribution of push requests over Github accounts?
```
sourcetype="big_data_events" type="PushEvents"| stats count by actor.login
```
![Image](2a.png?raw=true) 

### 2.b. How are different event types compared over time for the whole class?
```
sourcetype="big_data_events" | timechart count by type
```
![Image](2b.png?raw=true) 

### 2.c. Who had the most number of pull request events?
```
sourcetype="course_events_data" type="PullRequestEvent" | stats count by actor.login
```
![Image](https://dl.dropboxusercontent.com/u/44502811/Big%20Data%20ScreenShots/Hack%203/c.png) 

### 2.d. How many different kinds of pull request actions were made?
```
sourcetype="course_events_data" type="PullRequestEvent" | stats count by payload.action
```
![Image](https://dl.dropboxusercontent.com/u/44502811/Big%20Data%20ScreenShots/Hack%203/d.png) 

### 2.e. What is the distribution of opened pull requests over Github accounts?
```
{{sourcetype="github_hackathon_events" type="PullRequestEvent" | stats count by actor.login }}
```
![screenshot of a data table or a graph or both](challengee.png?raw=true) 

### 2.f. What is the submission pattern (i.e., pull requests) of the "Week 2 challenge" over time?
```
{{sourcetype="hackathon3" "repo.url"="https://api.github.com/repos/CSCI4830-002-2014/challenge-week-2" "type"="PullRequestEvenet" | timechart count }}
```
![screenshot of a data table or a graph or both](2f.png?raw=true) 


# Objective 3. Analzye Week 3

### Question 1.  Who creates the most IssueEvents total?
```
{{sourcetype="github_hackathon_events" type="IssuesEvent" | top actor.login }}
```
![screenshot of a data table or a graph or both](question1.png?raw=true) 

Mike has the most issue events, which makes sense. Indisquidge had a lot as well. It's interesting to see the various contributions/questions asked.

### Question 2. Who was the most active in commenting?
```
sourcetype="course_events_data" type="IssueCommentEvent" | stats count by actor.login
```
![Image](https://dl.dropboxusercontent.com/u/44502811/Big%20Data%20ScreenShots/Hack%203/3a.png) 

The commenters were similar to the issue events, except now professor Yeh is a leader, and alne has made quite a few contributions.

### Question 3. When are most people starting their homework(forking)?
```
sourcetype="big_data_events" type="ForkEvent" | timechart count by actor.login
```
![Image](A3.png?raw=true) 

This data shows when most people start on their homework and will be interesting if referenced against the due dates.
