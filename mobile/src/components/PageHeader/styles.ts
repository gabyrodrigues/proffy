import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#8257e5',
		padding: 40,
	},

	topBar: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	header: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	title: {
		color: '#fff',
		fontFamily: 'Archivo_700Bold',
		fontSize: 24,
		lineHeight: 32,
		maxWidth: 160,
		marginVertical: 40
	}
});

export default styles;