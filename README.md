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

## The Redux initial setup

For the complete file check [here at this point in time](https://github.com/taboca/doc-js-redux-observable-sample-learning/commit/220ad140a5b67f7ab3ad1e19d60c15d49beb9705?diff=split).

```
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
```

## Setup for combined reducers

```
import storeFlags from './reducer';

import { applyMiddleware, combineReducers } from 'redux';

export const rootReducer = combineReducers({
  storeFlags,
});
```

## Store setup with a reduce

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

## container -> component setup

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
