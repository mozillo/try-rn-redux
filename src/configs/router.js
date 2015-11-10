import React, { Navigator } from 'react-native';

import Share from '../containers/Share';

export default class Router {

	constructor(navigator) {
		this.navigator = navigator;
	}
	
	push(props, route) {
		route.props = props;
		this.navigator.push(route);
	}

	pop() {
		this.navigator.pop();
	}

	goToShare(props) {
		this.push(props, {
			name: 'Share',
			component: Share,
			sceneConfig: Navigator.SceneConfigs.VerticalDownSwipeJump
		})
	}



}