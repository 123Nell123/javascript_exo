#1 installe projet
#2 configuration fichiers prettier ; typescript
#3 initialiser express 
#4 decrire les fonctionnalites attendues
#5 trouver les api pour les images
#6 ecrire les test
#7 ecrire les routes
S



1) Initialize your project. Add the dependencies required for this project, including Express, TypeScript, Jasmine, Eslint, and Prettier. Complete your package.json file.
Where should your dependencies be placed?
What scripts should you create to take advantage of the dependencies you've added?
Are there other dependencies you would like to add or know you will need to improve your workflow?


2)Set up your project structure. Create folders and files for what you anticipate you will need for the project.
How do you plan to keep your source code and build code separately?
Where will you keep your tests?
How do you plan to name your routes? Utilities?

3)Configure your middleware and dependencies. You have quite a few dependencies that all need to work together. Sometimes it's easiest to write some simple js functions to test that all of your dependencies work together before you begin adding any functionality.
Does your TypeScript compile?
Do your Eslint and Prettier scripts work?
Are you able to write and pass a basic unit test?


4)Set up your server and create an API endpoint. Even though this application is fairly straightforward, you still want to set it up in a scalable way. How can you set up your server and route so that your project remains scalable? Only one endpoint is required. It's best to create this and test that it is working before you move on.

5)Install Sharp and configure endpoint. Documentation for Sharp can be found here. It is required that you create a separate module for your processing functionality and import it into your route. It is only required that you add resizing, but you may add additional processing if you choose to extend your application. It is also only required that you work with jpg files, so keep that in mind if you choose to use your own images and they are other formats.
Pay close attention to if you need to use asynchronous code or not. If you do, make sure you stay consistent throughout your application.
There is limited information on using Sharp with TypeScript, but don't let that be a blocker. Think about what type the Sharp constructor would return. Have a look at the complete documentation and the examples it provides.


6) Write your tests. If you haven't already been writing unit tests, now would be the time to start. Think about what you should test? At a minimum, you should have at least one test for your endpoint and at least one test for your image processing, but there are many different tests you could create.

7)Add caching. Add caching to your application so that repeated requests to your endpoint use pre-stored images rather than regenerating a new image each time.

8) Test, Debug, and Refactor. Think of edge-cases for your project and how someone may access your project. Should they get different error messages based on what's wrong? Make certain that your user isn't left in the dark when something goes wrong.
Do all of your tests still pass?
Does stopping and restarting your server cause any issues?
Does your user get feedback when something goes wrong?
Is your code easy to follow? Comments?
Is your API production-ready?

9)Build, Document, and Submit. If everything else has gone well, you should be able to compile your typescript and start up your production server to test that everything still works as expected. Make sure you've provided all necessary information in your readme file, so your reviewer knows how to test your API. If everything works and your documentation is complete, you're ready to submit! Congratulations!