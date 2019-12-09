Steps to create vue-mathificent

Exercise 1
Get Started with vue-cli

In this exercise, you will use vue-cli to create
your first Vue application, which will serve as the starting point for the math game we'll be building in the rest of the course. After you've built your Vue application, you'll use npm to package and deploy the application to a development server and
open it in a browser.

Best of all, most of the process of building a simple application and installing the
Node packages and scripts that make it run is done by vue-cli. This makes it easy for anyone with even the most basic knowledge of JavaScript and Vue to
quickly start working on a project. So, let's jump in!

  1. From your class files, open Vue/Exercises in the terminal by right-clicking on the folder and selecting Open in Terminal:
  1. Run npm install vue in the terminal to install vue-cli. 
  1. Run vue create mathificent. The dependencies will be downloaded and after a few minutes you'll have a new Vue project.
  1. Run cd mathificent to make your new Vue project the working directory.
At this point, your first Vue program has been created and you can look at the individual files that it is made of.
  1. Run npm serve. It will start the local development server.
  1. Open a browser and go to http://localhost:8080 to see your new Vue website:
<img src="/Images/vue-boilerplate-app.js" alt="The default Vue application created by vue-cli">
  1. Back in the terminal, press CTRL+C to stop the app. You will see the following
prompt:
Terminate batch job (Y/N)?
Enter y and press Enter.
  1. Close the terminal window by pressing the trash can icon.


Exercise 2
Learning the Structure of a Vue App

In this exercise, you will start with a boilerplate Vue project and make
some modifications to it to learn about the different files involved in Vue
applications and the different parts of those files.
  1. From the mathificent directory, open src/App.vue for editing.
  1. Take a look at the structure of this file. It has a template at the top, followed by a script block, followed by CSS styles. In Vue, this file is called a "single-file component."
  1. If it isn't already running, start the Vue server by entering npm run serve in your terminal. 4. Look at the template section of the App component. It renders an image and another component, named HelloWorld. Open a browser and go to http://localhost:8080.
  1. Open main.js in your code editor. This is the main JavaScript file for the entire Vue application. This file is the only place in your application that imports the Vue framework and renders the one component that contains every other component, also known as the root component. In our application, the root component is App.vue.
  1. In main.js, comment out the import statement that imports App:
// import App from './App.vue'
Save your file.
  1. If your development server isn't already running, start  it by running npm run serve.
  1. Once the development server starts up, go to http://localhost:8080 in your browser, where you'll see an error message, as shown here:
  1. Read the error message, then return to your code editor and remove the single-line comment before the import statemnt and save the file.
  1. Return to your web browser and the application should refresh and be working again. Because Vue applications are made up of components that are linked together using import statements and any one file may have many import statement, one of the most common errors that you'll see in Vue development is caused by a component or file not being imported or not being imported correctly.
  1. Look at the statement that begins with new Vue. This statement creates an instance of the Vue object with a render function that renders your root component in an element with an id attribute equal to app.
  1. Look at the render method. 
render: h => h(App);
This statement look strange, but it's really just a shorthand  way of telling Vue to render a certain component. The longhand form of this function is as follows:
render: function (createElement) {
    return createElement(App);
}
This statement can be shortened to the following:
render (createElement) {
    return creatElement(App);
}
If you use an alias instead of the createElement, the method can be shortened to:
render(h) {
    return h(App);
}
By using an arrow function, it can be shortened even further while still doing exactly the same thing.
render: h => h(App);
  1. Open public/index.html in your code editor. This is the HTML file that is loaded
when your web browser loads http://localhost:3000. Find the element with the
"app" id:
<div id="app"></div>
This is where index.js will render the root component for your application.
  1. Notice that index.html doesn't have any code that imports main.js. This is because index.html is a template. When you start the development server (using npm run serve), the code in main.js (and therefore everything that it imports) is linked to the index.html with &lt;script&gt; tags before the page opens in your web browser.
  1. Open App.js in your code editor.
  1. Delete the image element from Vue.js and notice that the browser updates and the image of the Vue logo is gone.
  1. Open the HelloWorld.vue file from the components directory. This file contains some links to useful Vue resources. It also contains a larger template section than the App.vue component. You don't need to do anything with this component, so close it when you're done examining the code.
  1. In App.js, delete the HelloWorld component from the template section, delete the import statement that imports it, and delete it from the return statement.
  1. In the template, add an h1 element with the word Mathificent inside it.
<template>
  <div id="app">
    <h1>Mathificent</h1>
  </div>
</template>
Your App.vue file should now look like this:
<template>
  <div id="app">
    <h1>Mathificent</h1>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

Your application should now look like this in the browser.
  1. If you see an error message, return to your App.js file and make sure that it matches the solution exactly.
  1. Remember to stop the app (CTRL+C) and close the terminal when you are done.

Exercise 3


