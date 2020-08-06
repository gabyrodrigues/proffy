import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#8257e5',
		flex: 1,
		justifyContent: 'center',
		padding: 40
	},

	banner: {
		resizeMode: 'contain',
		width: '100%'
	},
	
	title: {
		color: '#fff',
		fontFamily: 'Poppins_400Regular',
		fontSize: 20,
		lineHeight: 30,
		marginTop: 80
	},

	titleBold: {
		fontFamily: 'Poppins_600SemiBold'
	},

	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 40,
	},

	button: {
		backgroundColor: '#333',
		borderRadius: 8,
		height: 150,
		justifyContent: 'space-between',
		padding: 24,
		width: '48%'
	},

	buttonPrimary: {
		backgroundColor: '#9871f5',
	},

	buttonSecondary: {
		backgroundColor: '#04d361'
	},

	buttonText: {
		color: '#fff',
		fontFamily: 'Archivo_700Bold',
		fontSize: 18
	},

	totalConnections: {
		color: '#d4c2ff',
		fontFamily: 'Poppins_400Regular',
		fontSize: 12,
		lineHeight: 20,
		marginTop: 40,
		maxWidth: 140
	}
});

export default styles;