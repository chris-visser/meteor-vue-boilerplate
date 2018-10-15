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

At first it might seem that there are a lot of files. However, you don't need to touch most of the files located in the ./src/app root.

### Known issue

There is a [known issue](https://github.com/meteor-vue/vue-meteor/issues/326) that makes the client endlessly refresh in Meteor 1.8. To prevent this, set the NO_HMR=1 environment variable.

