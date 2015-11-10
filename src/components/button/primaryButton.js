import React, {
	Component,
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native';

const styles = {
	primaryStyle: {
		padding: 10,
		backgroundColor: '#336699',
		borderRadius: 3,
	},
	textStyle: {
		fontSize: 16,
		color: '#FFFFFF',
	}
};

export default class primaryButton extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		const {
			onPress,
			text,
		} = this.props;

		return (
			<TouchableOpacity onPress={onPress} style={styles.primaryStyle}>
				<Text style={styles.textStyle}>{text}</Text>
			</TouchableOpacity>
		);
	}
}