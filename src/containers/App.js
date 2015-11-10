import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import CoreApp from './CoreApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

var {
	View,
} = React;

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				{ () => <CoreApp /> }
			</Provider>
		);
	}
}