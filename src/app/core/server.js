import { VueSSR } from 'meteor/akryum:vue-ssr';

// import './api/publications';

import CreateApp from './app';

const isDev = process.env.NODE_ENV !== 'production';

/**
 * Call asyncData methods on components matched by the route.
 * This grants the ability for components to hydrate either the store or the local component state
 * Each asyncData method dispatches a store action and returns a Promise,
 * which is resolved when the action is complete and store state has been updated.
 * @param matchedComponents
 * @param store
 * @param route
 * @returns {Promise<any[]>}
 */
const callAsyncDataMethods = (matchedComponents, store, route) => {
  const componentsWithAsyncData = matchedComponents.filter(component => component.asyncData);

  const asyncDataPromises = componentsWithAsyncData.map(component => (
    component.asyncData({ store, route })
  ));

  return Promise.all(asyncDataPromises);
};

/**
 * Below will be called everytime a page needs to be rendered
 * @param context
 * @returns {Promise<any>}
 */
VueSSR.createApp = function (context) {
  const startTime = isDev && Date.now();

  return new Promise((resolve, reject) => {
    const { app, router, store } = CreateApp({
      ssr: true,
    });

    // set router's location
    router.push(context.url);

    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      const route = router.currentRoute;

      // no matched routes
      if (!matchedComponents.length) {
        reject(new Error('not-found'));
      }

      callAsyncDataMethods(matchedComponents, store, route)
        .then(() => {
          if (isDev) {
            /* eslint no-console: off */
            console.log(`[SSR] Data prefetch: ${Date.now() - startTime}ms`);
          }

          // Extract the resulting state from the store and push it into the window object
          const js = `window.__INITIAL_STATE__=${JSON.stringify(store.state)};`;

          resolve({
            app,
            js,
          });
        }).catch(reject);
    });
  });
};
