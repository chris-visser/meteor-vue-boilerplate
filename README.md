This boilerplate is meant to help people get started with Vue as the frontend library for Meteor. 
It illustrates how to set up a project with a scalable structure.


- [TODO] Extend explanation about directory structure
- [TODO] Document how to extend the existing functionality
- [TODO] Create contribution guide
- [TODO] Integrate Meteor's pub/sub functionality in a simple way
- [TODO] Consider abstracting away the routes.js file like in Nuxt.js


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
This folder should contain all the Vue components

### core
This folder contains the initialization code that should not have to be changed unless you want to change 
the way the app loads its core functionality. Examples of this functionality are the router, store, app initialization, 
SSR and asyncData calls.

### filters
This is where you put functionality that is shared across multiple components. An example would be a standardized 
way to format dates.

### layouts
Multiple layouts are supported. This is where you add or modify them. If no layout is configured for a page, 
the 'default' layout is loaded. The intention is that you use [Vue Slots](https://vuejs.org/v2/guide/components-slots.html) 
to determine where the page is loaded. 

Simply put `<slot />` on your layout where you want each page to be rendered.

### pages
Pages are configured in the routes.js file and are loaded when its route matches. The page is rendered on a 
designated spot within the configured layout. 

### plugins
Put all VueJS plugins here

### store
This is where the Vuex store modules are located

### supply
vue-supply will help with integrating Meteor's pub/sub system (WIP)

## Contribution

If you found a bug or have a request for a feature, then please open an issue. If you 
want to contribute then feel free to fork this repo and file a merge request. 