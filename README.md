# Team Members

* [Austin Wood](https://github.com/indiesquidge)
* [Jake White](https://github.com/jakewhite8)
* [Jake Charland](https://github.com/jakecharland)
* [Michael Aaron](https://github.com/develra)

# Objective 1. Node.js

[grabevents.js](grabevents.js)

# Objective 2. Reanalyze

### 2.a. What is the distribution of push requests over Github accounts?
```
sourcetype="course_github_events" type=PushEvent | stats count by actor.login
```
![screenshot of a data table or a graph or both](images/2a.png?raw=true)

### 2.b. How are different event types compared over time for the whole class?
```
sourcetype="course_github_events" | timechart count by type
```
![screenshot of a data table or a graph or both](images/2b.png?raw=true)

### 2.c. Who had the most number of pull request events?
```
sourcetype="course_github_events" type="PullRequestEvent" | top actor.login
```
![screenshot of a data table or a graph or both](images/2c.png?raw=true)

### 2.d. How many different kinds of pull request actions were made?
```
sourcetype="course_github_events" type="PullRequestEvent" | stats count by payload.action
```
![screenshot of a data table or a graph or both](images/2d.png?raw=true)

### 2.e. What is the distribution of opened pull requests over Github accounts?
```
sourcetype="course_github_events" type="PullRequestEvent" | stats count(payload.action) by actor.login
```
![screenshot of a data table or a graph or both](images/2e.png?raw=true)

### 2.f. What is the submission pattern (i.e., pull requests) of the "Week 2 challenge" over time?
```
sourcetype="course_github_events" type="PullRequestEvent" repo.name="CSCI-4830-002-2014/challenge-week-2" | timechart count
```
![screenshot of a data table or a graph or both](images/2f.png?raw=true)


# Objective 3. Analzye Week 3

### Question 1. {{write-the-question}}
```
{{splunk query producing the table or graph below}}
```
![screenshot of a data table or a graph or both](image.png?raw=true)

{{ write-one-or-two-sentences-to-discuss-the-answer}}

### Question 2. {{write-the-question}}
```
{{splunk query producing the table or graph below}}
```
![screenshot of a data table or a graph or both](image.png?raw=true)

{{ write-one-or-two-sentences-to-discuss-the-answer}}

### Question 3. {{write-the-question}}
```
{{splunk query producing the table or graph below}}
```
![screenshot of a data table or a graph or both](image.png?raw=true)

{{ write-one-or-two-sentences-to-discuss-the-answer}}
