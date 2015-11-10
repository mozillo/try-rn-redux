import React, { Component, View, Text, TouchableOpacity } from 'react-native';
import Device from '../utils/device';
import PrimaryButton from '../components/button/primaryButton';


const styles = {
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F03693', 
		height: Device.height, 
		width: Device.width 
	},
	textDisplay: {
		color: '#FFFFFF',
		fontSize: 18,
	},
};

export default class Share extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { loginUser, registerUser } = this.props.actions;
		const router = this.props.router;

		const { id } = this.props;

		return (
			<View style={styles.container}>
				<Text>Share View {id}</Text>
				
				<PrimaryButton onPress={() => { registerUser();router.pop()} } text="Return" />

			</View>
		)
	}
};