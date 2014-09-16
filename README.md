# Team Members

* [Justin McBride](https://github.com/dare599z)

# Objective 1. Node.js

[grabevents.js](grabevents.js)

# Objective 2. Reanalyze

### 2.a. What is the distribution of push requests over Github accounts?
```
sourcetype=new_github type="PushEvent" | stats count by actor.login
```
![screenshot of a data table or a graph or both](obj2a.png?raw=true) 

### 2.b. How are different event types compared over time for the whole class?
```
sourcetype=new_github | stats dc(type) by actor.login
```
![screenshot of a data table or a graph or both](obj2b.png?raw=true) 

### 2.c. Who had the most number of pull request events?
```
sourcetype=new_github type="PullRequestEvent" | top actor.login limit=1
```
![screenshot of a data table or a graph or both](obj2c.png?raw=true) 

### 2.d. How many different kinds of pull request actions were made?
```
sourcetype=new_github type="PullRequestEvent" | stats by payload.action
```
![screenshot of a data table or a graph or both](obj2d.png?raw=true) 

### 2.e. What is the distribution of opened pull requests over Github accounts?
```
sourcetype=new_github type="PullRequestEvent" payload.action="opened" | stats by actor.login
```
![screenshot of a data table or a graph or both](obj2e.png?raw=true) 

### 2.f. What is the submission pattern (i.e., pull requests) of the "Week 2 challenge" over time?
```
sourcetype=new_github repo.name="CSCI-4830-002-2014/challenge-week-2" | timechart count by type
```
![screenshot of a data table or a graph or both](obj2f.png?raw=true) 


# Objective 3. Analzye Week 3

### Question 1. When did most people fork the Challenge 3 Repo?
```
sourcetype=new_github repo.name="CSCI-4830-002-2014/challenge-week-3" type="ForkEvent" | timechart count
```
![screenshot of a data table or a graph or both](obj3a.png?raw=true) 

{{ While a few students fork the repository early in the week, a majority seem to wait until the day prior to it being due to start the assignment. }}

### Question 2. After they forked, when did most students complete and turn in the assignment?
```
sourcetype=new_github repo.name="CSCI-4830-002-2014/challenge-week-3" type="ForkEvent" | timechart count
```
![screenshot of a data table or a graph or both](obj3b.png?raw=true) 

{{ write-one-or-two-sentences-to-discuss-the-answer}}

### Question 3. {{write-the-question}}
```
{{splunk query producing the table or graph below}}
```
![screenshot of a data table or a graph or both](image.png?raw=true) 

{{ write-one-or-two-sentences-to-discuss-the-answer}}
