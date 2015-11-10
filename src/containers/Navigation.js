import React, { Component, View, Text, Navigator } from 'react-native';
import Home from './Home';
import Router from '../configs/router';

export default class Navigation extends Component {

	constructor(props) {
		super(props);
		this.initialRoute = {
			name: 'Home',
			component: Home
		};
	}

	componentDidMount() {
	  this.navigator.navigationContext.addListener('didfocus', e => {
	      let route = e.data.route;
	      this[route.name] && this[route.name].componentDidFocus && this[route.name].componentDidFocus();
	  });
  }

	configureScene(route) {
    if (route.sceneConfig) {
        return route.sceneConfig;
    }
    return Navigator.SceneConfigs.FloatFromRight;
	}

	renderScene(route, navigator) {
		let Component = route.component;
		
		this.router = this.router || new Router(navigator);

		const { state } = this.props;
		const { actions } = this.props;

		return (
			<Component 
				ref={view=>this[route.name] = view}
				{...route.props}
				state={state}
				actions={actions}
				navigator={navigator} 
				router={this.router} /> 
		);
	}

	render() {
		return (
			<Navigator
				ref={view => this.navigator=view}
				initialRoute={this.initialRoute}
				configureScene={this.configureScene.bind(this)}
				renderScene={this.renderScene.bind(this)} />
		);
	}

};

