import React, { Component, View, Text, TouchableOpacity } from 'react-native';
import Device from '../utils/device';
import Config from '../configs/config';
import Share from './Share';
import PrimaryButton from '../components/button/primaryButton';

const styles = { 
	container: {
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: '#999999', 
		height: Device.height, 
		width: Device.width 
	},
	jsonDisplay: {
		backgroundColor: '#FFFFFF',
		margin: 10,
		padding: 10,
		fontSize: 14,
	},
	textDisplay: {
		color: '#FFFFFF',
		fontSize: 18,
	},
};

export default class Home extends Component {

	constructor(props) {
		super(props)
		const { loginUser, registerUser } = this.props.actions;
		this.loginUser = loginUser;
		this.registerUser = registerUser;
	}

	recoverMyProfile() {
		this.loginUser();
	}

	shareMyContent(id) {
		const router = this.props.router;
		router.goToShare({ id: id });
	}

	render() {

		const { user } = this.props.state;

		return (
			<View style={styles.container}>

				<Text style={ styles.jsonDisplay }>{ JSON.stringify(user) }</Text>
				
				<PrimaryButton 
					onPress={this.recoverMyProfile.bind(this)} 
					text="恢复个人资料" />

				<PrimaryButton 
					onPress={this.shareMyContent.bind(this, 1)} 
					text="支持一下" />

			</View>
		);
	}

};