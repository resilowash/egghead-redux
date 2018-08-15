## Todo app
Typically when learning something new, I like to make a small example application that is straightforward and has easy to understand functionality.
This is so that we get to focus on learning the technology rather than understanding what the app is supposed to do.
This application is a take on the redux tutorial found at https://egghead.io/courses/getting-started-with-redux utilizing the patterns
that we use for our react/redux stack. This way while you can understand what is happening in the video you can more easily apply it to our
design patterns at IQ.

#### To Run the app
Install the dependencies and run the app. Utilizes webpack-dev-server to run.
```
> npm install
> npm start
```

#### Todo list for project
- [x] Hook up the Actions to the container and component correctly.
- [x] Hook up the reducers correctly.
- [x] Hook up the text box
- [x] Create the list items component with a function
- [ ] Create a service backend with node to save todos
- [ ] Create an authorization service
- [ ] Refactor to use yarn
- [x] Refactor to use functional components where you can
- [ ] Add JSLint to webpack
- [ ] Add Jest unit tests
- [ ] Make webpack do live reloading
- [ ] Optional: Make Webpack not use bundle.js during development
- [ ] Re-scaffold project -> Consider a yeoman scaffolding solution
- [ ] Make debuggable in visual studio code as well as providing more info to the console.
- [ ] Replace global variable with state change instead.
- [ ] Dockerfy the app
- [x] Setup the filter links properly
- [x] Allow for toggling the todos complete or incomplete by clicking them.
- [ ] Optional: Add button bar instead of filter links?
- [ ] Optional: add Table rows with striping and a action link

##### Redux Tutorial Framework
I used Stephen Grider's redux simple starter as a baseline with some heavy modifications. It probably would have been more simple to use create-reeact template or something similar.  Eventually I want to scaffold out our pattern using yeoman.
Utilizing the Redux tutorial on egghead.io as a guiderail for how development should work.
