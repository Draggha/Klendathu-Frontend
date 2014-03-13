Klendathu-Frontend
==================

Templates, JS, CSS, HTML, Ember.js, Blood, Sweat &amp; Tears



## What is this and where is it going?
To give a little bit of background information about where this idea was born:
A collegue of mine and myself very often came to the point where we found our tools lacking. Our bugtracker never felt quite right for the workflows we have. And a set of many many tools for specialized tasks like two different documentation tools and not yet really defined tools to document our test cases (any form of text file will be used for this; depending on the person this can be one of the following or something entirely differet: Microsoft Word, Microsoft Excel, Google Doc, Google Spreadsheet, .todo files, and many more...
Our workflow often times looks something like this:

 1. A feature request for a given release is created by a customer and/or project manager as a bugtracker ticket.
 2. A project manager summarizes all needed changes for the customer and us developers to see in the **head** of the ticket.
 3. The ticket is assigned to our team and one of us grabs it to analyzes the request.
 4. A list of all needed changes from the perspective of the developer is being created and persisted in the ticket as a **note**.
 5. If something is amiss questions will be asked. The ticket will therefore be moved back and forth between the development team & their project manager and between the project manager & the customer until the feature request is complete and all TODOs for the development team aswell as all implications of the feature request are set in stone.
 6. A project manager writes a table in one of our documentation tools containing the state of all tickets that are relevant for this release. The tickets themselves also have a state management that can be and will be used. Relevant states in this stage of the release are:
    * *assigned*: Congratulations! You have a ticket! Now check what it says.
    * *approved*: All needed information is given. Development will commence as soon as someone has the time for it.
    * *in development*: The feature is currently under active development.
    * *QA*: The feature is currently being tested.
 7. The developer changes the state "in development" in both the ticket and the release overview in the documentation tool and starts work on the requested feature.
 7. After the development and module tests are be finished everything the developer has done is being documented in the ticket as a **note** (the progress of the feature is also documented daily as a heads-up for the team).
 8. The developer documents tests cases (more like user stories and no automated tests :'( ) for the feature (sometimes this happens before 7.). The ticket's state is being changed to QA and it is assigned again to the team.
 9. Another developer from our team takes the ticket and tests the feature according to
    * the given test cases
    * anything that sticks out as missing (which will be added as a test case later)
 10. The original developer of this particular feature changes the state of the ticket in the documentation tool and begins to document it in another documentation tool (a tool different from the one where the release overview resides in). This is the technical documentation. Once this is done the ticket's stae has to be changed in the release overview.
 11. If everything is alright the ticket is assigned a fictional person we have as a ticket holder. All tickets that lie there are waiting to be transfered from DEV to the QA system. The tickets state is being changed in the documentation tool again (ticket is done and tested and waits for transport to QA).
 12. The project manager changes the state of the ticket in the release overview and begins writing the user documentation. After completion the state will be changed again.


Pretty much overhead, don't you think? And there is even more if it concerns change requests that are not part of the CMS we work with. Then you'd have to add steps with our CVS (branching, cloning, creating a sane commit history, persist the changes on a server).



### Enter Klendathu
Klendathu was anticipated to create a saner workflow.
What we want is one tool to do the following:

 * Tell me what needs to be done.
 * Let me tell others what I already have done.
 * Let me tell others what needs to be tested and how.
 * Let me use a set of predefined tests for the project so that I don't always have to write the same test cases over and over again.
 * Give me a sane overview where i can group every ticket I need to keep track of no matter who currently works on it (like sticky notes). Do this on an individual level and on a team level so that it stays lean and customizable.
 * Enable imports of test reports from automated testing.
 * Enable exports of certain kinds of information to create test reports or even documentation

Maybe someone can add to this list?



## What's in a name?
Klendathu is just the working title. I'm still looking actively for a name for this project, so any suggestions are welcome. :)



## License
This project is published under the MIT License. See the LICENSE file for more information.