This boilerplate is meant to help people get started with Vue as the frontend library for Meteor. 
It illustrates how to set up a project with a scalable structure. 

## Getting Started

Run the below command to install the dependencies

```sh
npm install
```

Then start the app in development mode:

```sh
npm start
```

### Known issue

There are some issues related to vue-ssr and therefore I've added the fixed versions 
of the affected packages into this repo until the issues are resolved. 

https://github.com/meteor-vue/vue-meteor/pull/343

As soon as my pull request is accept, just remove the `./packages` folder and run the below command:

```bash
meteor update --all-packages
```
 

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

