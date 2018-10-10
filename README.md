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
