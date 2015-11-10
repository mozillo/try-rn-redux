import React, {
	StyleSheet,
	Component,
	View,
	Text,
	ListView,
	TouchableOpacity,
	Dimensions,
} from 'react-native';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = {
	container: {
		width: deviceWidth,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonArea: {
		margin: 10,
		padding: 10,
		backgroundColor: '#999999',
	},
	buttonText: {
		color: '#FFFFFF',
		fontSize: 14,
	}
};

export default class ActivityList extends Component {
	constructor(props) {
		super(props);
	}

	renderRow(dataRow, sectionId, rowId) {
		return (
			<View>
				<Text>{ JSON.stringify(dataRow) }</Text>
			</View>
		);
	}

	render() {
		const {getLatest, postActivity, postComment, refreshList} = this.props.actions;
		const { dataSource } = this.props.state;
		
		return (
		<View>
			<ListView 
				dataSource={dataSource}
				renderRow={this.renderRow} />

			<View style={ styles.container }>
				<TouchableOpacity style={ styles.buttonArea } onPress={getLatest}>
					<Text style={ styles.buttonText }>getLatest</Text>
				</TouchableOpacity>
				<TouchableOpacity style={ styles.buttonArea } onPress={postActivity}>
					<Text style={ styles.buttonText }>postActivity</Text>
				</TouchableOpacity>
			</View>

			<View style={ styles.container }>
				<TouchableOpacity style={ styles.buttonArea } onPress={postComment}>
					<Text style={ styles.buttonText }>postComment</Text>
				</TouchableOpacity>
				<TouchableOpacity style={ styles.buttonArea } onPress={refreshList}>
					<Text style={ styles.buttonText }>refreshList</Text>
				</TouchableOpacity>
			</View>
		</View>
		);
	}
}