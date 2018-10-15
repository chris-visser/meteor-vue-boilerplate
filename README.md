This boilerplate is meant to help people get started with Vue as the frontend library for Meteor. 
It illustrates how to set up a project with a scalable structure.


- [TODO] Extend explanation about directory structure
- [TODO] Document how to extend the existing functionality
- [TODO] Create contribution guide
- [TODO] Integrate Meteor's pub/sub functionality in a simple way
- [TODO] Consider abstracting away the routes.js file like in Nuxt.js
- [TODO] Apply linting and tests

## Getting Started

Run the below command to install the dependencies

```sh
npm install
```

Then start the app in development mode:

```sh
npm start
```

At first it might seem that there are a lot of files. However, you don't need to touch most of the files located in the ./src/app root.

### Known issue

There is a [known issue](https://github.com/meteor-vue/vue-meteor/issues/326) that makes the client endlessly refresh in Meteor 1.8. To prevent this, set the NO_HMR=1 environment variable.

## App Directory Structure

### components
This folder should contain all the vue components

### core
This folder contains the boilerplate code and does not have to be changed to get your Meteor+Vue app up and running. 

### filters
This is where you put functionality that is shared across multiple components.

### layouts
This is where you add or modify the app's main layout(s)

### pages
Pages are rendered on designated area's in the layouts based on the routes configuration located in the routes.js file

### plugins
Put all VueJS plugins here

### store
This is where the Vuex store modules are located

### supply
vue-supply will help with integrating Meteor's pub/sub system (WIP)
