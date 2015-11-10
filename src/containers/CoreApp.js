'use strict';

import React, { Component, View, Text, Navigator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import Navigation from './Navigation';
import * as actions from '../actions';

@connect(state => ({
	state: state
}))
class CoreApp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { state, dispatch } = this.props;
		const action = bindActionCreators(actions, dispatch);
		return (
			<Navigation
				 state={state} 
				 actions={action} />
		);
	}

}

module.exports = CoreApp;
