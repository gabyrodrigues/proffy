import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<Image 
					style={styles.avatar}
					source={{ uri: 'https://lh3.googleusercontent.com/ogw/ADGmqu_trojPS_HvpBXJzeUJSwyY6SWBsmjOG4EA6Ge8=s83-c-mo' }}
				/>

				<View style={styles.profileInfo}>
					<Text style={styles.name}>Gabriely Lima</Text>
					<Text style={styles.subject}>Química</Text>
				</View>
			</View>

			<Text style={styles.bio}>
				Entusiasta das melhores tecnologias de química avançada.
				{'\n'}{'\n'}
				Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. 
				Mais de 200.000 pessoas já passaram por uma das minhas explosões.
			</Text>

			<View style={styles.footer}>
				<Text style={styles.price}>
						Preço Hora {'   '}
						<Text style={styles.priceValue}>
							R$ 20,00
						</Text>
				</Text>

				<View style={styles.buttonsContainer}>
						<RectButton style={[styles.favoriteButton, styles.favorited]}>
							{/* <Image source={heartOutlineIcon} /> */}
							<Image source={unfavoriteIcon} />
						</RectButton>

						<RectButton style={styles.contactButton}>
							<Image source={whatsappIcon} />
							<Text style={styles.contactButtonText}>Entrar em contato</Text>
						</RectButton>
				</View>
			</View>
		</View>
	);
}

export default TeacherItem;