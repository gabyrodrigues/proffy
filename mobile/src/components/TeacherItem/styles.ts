import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
		backgroundColor: '#fff',
		borderColor: '#e6e6f0',
		borderRadius: 8,
		borderWidth: 1,
		marginBottom: 16,
		overflow: 'hidden'
	},

	profile: {
		alignItems: 'center',
		flexDirection: 'row',
		padding: 24
	},

	avatar: {
		backgroundColor: '#eee',
		borderRadius: 32,
		height: 64,
		width: 64
	},

	profileInfo: {
		marginLeft: 16
	},

	name: {
		color: '#32264d',
		fontFamily: 'Archivo_700Bold',
		fontSize: 20
	},

	subject: {
		color: '#6a6180',
		fontFamily: 'Poppins_400Regular',
		fontSize: 12,
		marginTop: 4
	},

	bio: {
		color: '#6a6180',
		fontFamily: 'Poppins_400Regular',
		fontSize: 14,
		lineHeight: 27,
		marginHorizontal: 24
	},

	footer: {
		alignItems: 'center',
		backgroundColor: '#fafafc',
		marginTop: 24,
		padding: 24
	},

	price: {
		fontFamily: 'Poppins_400Regular',
		color: '#6a6180',
		fontSize: 14
	},

	priceValue: {
		color: '#8257e5',
		fontFamily: 'Archivo_700Bold',
		fontSize: 16,
		marginLeft: 16
	},

	buttonsContainer: {
		flexDirection: 'row',
		marginTop: 16
	},

	favoriteButton: {
		alignItems: 'center',
		backgroundColor: '#8257e5',
		borderRadius: 8,
		height: 56,
		justifyContent: 'center',
		marginRight: 8,
		width: 56
	},

	favorited: {
		backgroundColor: '#e33d3d'
	},

	contactButton: {
		alignItems: 'center',
		backgroundColor: '#04d361',
		borderRadius: 8,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		marginRight: 8
	},

	contactButtonText: {
		color: '#fff',
		fontFamily: 'Archivo_700Bold',
		fontSize: 16,
		marginLeft: 16
	}
});

export default styles;