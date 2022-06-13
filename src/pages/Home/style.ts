import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		width: '100%',
		height: 35,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerText: {
		fontWeight: '700',
		color: '#fff',
		fontSize: 20,
	},
	itemContainer: {
		paddingHorizontal: 10,
		paddingTop: 50,
	},
	itemUseContainer: {
		backgroundColor: '#3c3d46',
		paddingHorizontal: 20,
		borderRadius: 5,
		flexDirection: 'row',
	},
	imageContainer: {
		width: 120,
		height: 150,
		alignItems: 'center',
		top: -20,
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
	itemContentFooter: {
		marginTop: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	pressable: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		backgroundColor: '#e58937',
		borderRadius: 10,
	},
	buttonText: {
		fontSize: 14,
		fontWeight: '700',
		color: '#fff',
		marginBottom: 5,
	},
	pagination: {
		flexDirection: 'row',
		width: '100%',
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	paginationPress: {
		marginHorizontal: 15,
	},
	paginationPressText: {
		color: '#fff',
		fontSize: 17,
		marginHorizontal: 15,
	},
	paginationPageText: {
		color: '#fff',
		fontSize: 17,
	},
});

export default styles;
