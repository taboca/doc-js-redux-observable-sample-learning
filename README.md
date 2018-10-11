This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installed Redux, React-Redux and Redux-Observable

```  
npm install redux --save
npm install react-redux --save
npm install redux-observable --save
```  

## Let's setup Redux store provider and attach to the main App element  


```
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
```

## The Redux initial setup (./src/index.js)

For the complete file check [here at this point in time](https://github.com/taboca/doc-js-redux-observable-sample-learning/commit/220ad140a5b67f7ab3ad1e19d60c15d49beb9705?diff=split).

```
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/root';

const store = createStore(rootReducer);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
```

## App (./src/App.js)

```
import React, { Component } from 'react';
import logo from './logo.svg';
import MyComponentButton from './containers/MyComponentButton'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MyComponentButton />
      </div>
    );
  }
}
export default App;
```

## Setup for combined reducers (./src/store/root.js)

```
import storeFlags from './reducer';

import { applyMiddleware, combineReducers } from 'redux';

export const rootReducer = combineReducers({
  storeFlags,
});
```

## Store setup with a reduce (./src/store/reducer.js)

```
const defaultState = {
  flag: false
}

export default function reduce(state = defaultState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
```

## container -> component setup (./src/containers/MyComponentButton.js)

```
import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyComponentButton extends Component {

  constructor(props) {
    super(props);
    this.processClick = this.processClick.bind(this);
  }

  render() {
    return (
      <div>
        {this.props.flag}
        <button onClick={(e)=>{this.processClick(e)}}>click</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    flag : state.storeFlags.flag,
  };
}

export default connect(mapStateToProps)(MyComponentButton);

```

## Setup action types (./src/store/actionTypes.js)

```
export const ACTION_FLAG_ON = 'ACTION_FLAG_ON';
```
## Setup an action so to push state change to the store state (./src/store/actions.js)


```
import * as types from './actionTypes';

/* Example of async with thunk.. */

export function command_setFlagOn() {
  return {
      type : types.ACTION_FLAG_ON,
  }
}
```

## Updating the reducer

```
import * as types from './actionTypes';

const defaultState = {
  flag: false
}

export default function reduce(state = defaultState, action = {}) {
  switch (action.type) {
    case types.ACTION_FLAG_ON:
      return Object.assign({}, state, {
        flag : true,
      });
    default:
      return state;
  }
}
```

# Now the second part, using combineEpics

Let's move from a click button -> flag to true, to an epic so the click changes state from 0 then to 1 plus delay up to 2.  

## Updating root to include combineEpics

```
import { applyMiddleware, combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import storeFlags from './reducer';
import { flagFlip } from './epics';

export const rootReducer = combineReducers({
  storeFlags,
});

export const rootEpic = combineEpics(
  flagFlip,
);
```
## Updating actionTypes for 2 changes "async" like operatio

```
export const ACTION_FLAG_1 = 'ACTION_FLAG_1';
export const ACTION_FLAG_2 = 'ACTION_FLAG_2';
```

## creating the epic

```
import * as types from './actionTypes';
import { filter, delay, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';


export const flagFlip = action$ => action$.pipe(
  filter(action => action.type === types.ACTION_FLAG_1),
  delay(1000),
  mapTo({ type: types.ACTION_FLAG_2 })
);
```

## Updating reducer changing from true/false to 0,1,2

```
import * as types from './actionTypes';

const defaultState = {
  flag: 0
}

export default function reduce(state = defaultState, action = {}) {
  switch (action.type) {
    case types.ACTION_FLAG_1:
      return Object.assign({}, state, {
        flag : 1,
      });
    case types.ACTION_FLAG_2:
      return Object.assign({}, state, {
        flag : 2,
      });
    default:
      return state;
  }
}

```


## Updating index to tie your epics to the Redux system store

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* Redux setup */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer } from './store/root';
import { rootEpic } from './store/root';

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

```
