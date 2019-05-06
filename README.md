# WebCloud-Aggregator
The system is composed of 3 services: 
- Aggregator 
- Isodate formatter 
- Utcdate formatter

Cloud Based Web Technologies - Project
We want to develop a system that delivers the time now in different formats and timezones.
This system will based on microservices (do not worry, it is easier than what it sounds) but
let’s start simple.
Structure
The system is composed of 3 services:
- Aggregator
- Isodate formatter
- Utcdate formatter
These three components interact according the following schema:



Project Description
The service UTCDateService from the above diagram has already been created in class.
The ISODateService can be found in the following address:
http://isodate.kubernetes.cafe
As an example, if you browse the URL: http://isodate.kubernetes.cafe/123123123/isodate it
should return a timestamp formatted as ISO Date.
The service UTC Date was built in class and you should be running it in your own machine
for the aggregator to be able to consume it.
On this repository: https://github.com/dgonzalez/cct-aggregator You can find the template for
working on the aggregator. Here is where we are going to work.
The code, at the moment, is consuming the ISODate service on the address mentioned
above. We need to:
- Consume UTC Date from your local machine and return the UTC and ISO formats together
on a single JSON payload. In order to facilitate that, Aggregator is listening on the port
8081 (have a look at the application.properties file) so you can run the aggregator
service on the port 8081 and the UTC date service on the port 8080. Remember, to access
aggregator, you need to browse http://localhost:8081 (10 Marks)
- Build a UI that allows the user to request a given timestamp to be formatted as UTC and
ISO with a call to the Aggregator (10 Marks)
- Using jQuery (and HTML if necessary) create a box that will update automatically every
second, formatting the current timestamp into ISO and UTC date formats (5 Marks)
- On a document (word or just plain text) explain the decisions you took to build the project
and answer the following questions:
1. The components (aggregator, isodate, utcdate) are using HTTP or HTTPS? Explain
what is the difference between the two protocols. (2 marks)
2. When you use the jQuery method $.get(…), what happens at the networking level
from your browser? (3 marks)
Do you need extra help?
Send me an email: david.gonzalez@nearform.com. We can schedule a video call to give
you some hints.
