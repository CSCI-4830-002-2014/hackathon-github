# Team Members

* [Josh Ferge](https://github.com/JoshFerge)
* [Irfan Nadiadi](https://github.com/Irfann1)
* [Justin McBride](https://github.com/dare599z)
* [Michael Fyk](https://github.com/thefyk)
* [LoganBates](https://github.com/LoganBates)

# Objective 1. Node.js

[grabevents.js](grabevents.js)

# Objective 2. Reanalyze

### 2.a. What is the distribution of push requests over Github accounts?
```
{{splunk query producing the table or graph below}}
```
![screenshot of a data table or a graph or both](image.png?raw=true) 

### 2.b. How are different event types compared over time for the whole class?
```
{{splunk query producing the table or graph below}}
```
![screenshot of a data table or a graph or both](image.png?raw=true) 

### 2.c. Who had the most number of pull request events?
```
sourcetype=hackathon_github_events type=PullRequestEvent | top actor.login
```
![screenshot of a data table or a graph or both](http://i.imgur.com/XAykT6a.png) 

### 2.d. How many different kinds of pull request actions were made?
```
sourcetype=hackathon_github_events type=PullRequestEvent | top payload.action
```
![screenshot of a data table or a graph or both](http://i.imgur.com/MXAM0Xs.png) 

### 2.e. What is the distribution of opened pull requests over Github accounts?
```
{{splunk query producing the table or graph below}}
```
![screenshot of a data table or a graph or both](image.png?raw=true) 

### 2.f. What is the submission pattern (i.e., pull requests) of the "Week 2 challenge" over time?
```
{{splunk query producing the table or graph below}}
```
![screenshot of a data table or a graph or both](image.png?raw=true) 


# Objective 3. Analzye Week 3

### Question 1. What are the highest login id's (newest users)?
```
sourcetype=hackathon_github_events | top limit=5 id
```
![screenshot of a data table or a graph or both](http://i.imgur.com/6JLjB3l.png) 

{{ write-one-or-two-sentences-to-discuss-the-answer}}

### Question 2. {{write-the-question}}
```
{{splunk query producing the table or graph below}}
```
![screenshot of a data table or a graph or both](image.png?raw=true) 

{{ write-one-or-two-sentences-to-discuss-the-answer}}

### Question 3. What were the top event types?
```
sourcetype=hackathon_github_events | top type
```
![screenshot of a data table or a graph or both](http://i.imgur.com/bvat2ap.png) 

{{ write-one-or-two-sentences-to-discuss-the-answer}}
