import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux';

import { routerReducer, routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';

import authReducer from '../../reducers/AuthorizationReducer';

import adminReducer from '../../reducers/AdminReducer';

import companyReducer from '../../reducers/CompanyReducer';

import createHistory from 'history/createBrowserHistory';

import jobReducer from '../../reducers/JobReducer';

import {reducer as formReducer} from 'redux-form' 

export const history = createHistory();

const rootReducer = combineReducers({
    auth: authReducer,
    router: routerReducer,
    admin: adminReducer,
    company: companyReducer,
    job: jobReducer,
    form: formReducer,
});

const middleWares = [
    thunk,
    routerMiddleware(history),
];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancers = composeEnhancers(
  applyMiddleware(...middleWares),
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancers);

export default store;