import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img
					src="https://avatars3.githubusercontent.com/u/20193180?s=460&u=ee3827bfb3f581d06bea55ef1dc0927853808327&v=4"
					alt="Gabriely Rodrigues"
				/>

				<div>
					<strong>Gabriely Rodrigues</strong>
					<span>Química</span>
				</div>
			</header>

			<p>
				Entusiasta das melhores tecnologias de química avançada.
					</p>
			<p>
				Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
				Mais de 200.000 pessoas já passaram por uma das minhas explosões.
					</p>

			<footer>
				<p>
					Preço/hora
							<strong>R$ 20,00</strong>
				</p>

				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp" />
							Entrar em contato
						</button>
			</footer>
		</article>
	);
}