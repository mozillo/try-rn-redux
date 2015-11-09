'use strict';

import React, { Component, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import ActivityList from '../components/activityList';
import * as actions from '../actions/activityActions';
import { connect } from 'react-redux/native';

@connect(state => ({
	state: state.activity
}))
class ListApp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { state, dispatch } = this.props;
		
		return (
			<ActivityList 
				dataSource={state.dataSource}
				{...bindActionCreators(actions, dispatch)} />
		);
	}
}

module.exports = ListApp;