import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	maskedContainer: {
		flex: 1,
		backgroundColor: '#000000CC',
	},
	headerContainer: {
		width: '100%',
		height: 30,
		paddingHorizontal: 20,
		paddingTop: 10,
	},
	playerContainer: {
		width: width,
		height: height * 0.25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	contentContainer: {
		flex: 1,
		paddingHorizontal: 10,
	},
	contentContainer2: {
		flex: 1,
		backgroundColor: '#3c3d46',
		borderRadius: 5,
		paddingHorizontal: 20,
	},
	itemContainer: {},
	itemUseContainer: {
		backgroundColor: '#3c3d46',
		borderRadius: 5,
		flexDirection: 'row',
	},
	imageContainer: {
		width: 120,
		height: 150,
		alignItems: 'center',
		top: -50,
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	image: {
		borderRadius: 5,
		width: '100%',
		height: '100%',
	},
	itemContent: {
		paddingVertical: 20,
		paddingLeft: 25,
		paddingRight: 5,
		flex: 1,
	},
	itemName: {
		fontSize: 17,
		fontWeight: '700',
		color: '#ddd',
		marginBottom: 5,
	},
	itemEpisode: {
		fontSize: 12,
		fontWeight: '600',
		color: '#aaa',
		marginBottom: 5,
	},
	itemDate: {
		fontSize: 11,
		fontWeight: '600',
		color: '#aaa',
	},
	labelText: {
		color: '#ccc',
		fontSize: 17,
		fontWeight: '700',
		marginBottom: 5,
	},
	introContentText: {
		color: '#ccc',
		fontSize: 15,
		marginBottom: 20,
	},
	safeArea: {
		flex: 1,
	},
	characterContainer: {
		marginRight: 20,
		width: 70,
	},
	characterImage: {
		width: 70,
		height: 100,
		borderRadius: 5,
	},
	characterText: {
		color: '#fff',
		flexWrap: 'wrap',
	},
});

export default styles;
