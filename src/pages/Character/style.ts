import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: width,
		height: height * 0.6,
	},
	maskedContainer: {
		flex: 1,
		backgroundColor: '#000000AA',
		padding: 20,
	},
	headerContainer: {
		width: '100%',
		height: 30,
		paddingTop: 10,
	},
	playerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	playerContentContainer: {},
	playerName: {
		fontSize: 30,
		color: '#ccc',
		fontWeight: 'bold',
	},
	playerInfo: {
		fontSize: 16,
		color: '#ccc',
	},
	location: {
		color: '#ccc',
	},
	repertuarContainer: {
		flex: 1,
		backgroundColor: '#eee',
		padding: 10,
	},
	repertuarLabel: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 10,
	},
	repertuarItemContainer: {
		marginRight: 20,
		width: 100,
	},
	repertuarItemImage: {
		width: 100,
		height: 120,
		borderRadius: 5,
	},
	repertuarItemText: {
		color: '#000',
	},
});

export default styles;
