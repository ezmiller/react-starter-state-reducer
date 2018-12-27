# react-starter-state-reducer

## Summary

This is a starter package for bootstrapping a react project.

It is based on create-react-app and also includes:

- react-testing-library
- lodash

For state managament, it has the barebones of a state management approach based on a the State Reducer pattern:

1. App is loaded with two props:

   - `initialState` - Application level state object.
   - `stateReducer` - A reducer function that is provided the current state and an `updater` object (akin to a redux action) and that based on this can update the state object.

2. `App` is equipped with a `setInternalState` function to be called in place of `setState` and which takes an `updater` object or function and a callback. `setInternalState` calls `setState`, but before it does so it generates a set of changes by passing the updater through `this.props.stateReducer`.

3. The `initialState` and `stateReducer` are defined in a file `state.js`. Updater functions can be placed in a file `updater.js`.

4. Note that the `stateReducer` must **always** return the original state by default when no change is in order.
