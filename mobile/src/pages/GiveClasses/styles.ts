import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#8257e5',
		flex: 1,
		justifyContent: 'center',
		padding: 40
	},

	content: {
		flex: 1,
		justifyContent: 'center'
	},

	title: {
		color: '#fff',
		fontFamily: 'Archivo_700Bold',
		fontSize: 32,
		lineHeight: 37,
		maxWidth: 180
	},

	description: {
		color: '#d4c2ff',
		fontFamily: 'Poppins_400Regular',
		fontSize: 16,
		lineHeight: 26,
		marginTop: 24,
		maxWidth: 240
	},

	okButton: {
		alignItems: 'center',
		backgroundColor: '#04d361',
		borderRadius: 8,
		marginVertical: 40,
		height: 58,
		justifyContent: 'center'
	},

	okButtonText: {
		color: '#fff',
		fontFamily: 'Archivo_700Bold',
		fontSize: 16
	}
});

export default styles;