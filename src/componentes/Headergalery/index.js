import React, { useEffect, useState } from 'react';
import {Box, Text, Flex, Image} from 'rebass';
import { Link, animateScroll as scroll } from "react-scroll";

import styles from './header.module.scss';

export function Headergalery() {

	
	return(
		<Box className={styles.menuGallery}>
			<Flex justifyContent="space-between" alignItems="center" py={15} >
				<Box width={230}>
					<Image src="/images/logo.png" alt="Pau Brasil" width={180}/>
				</Box>
				<a href="https://www.quiosquesecia.com.br/" color="#fff" className="menuGallerylink" >Voltar para home</a>

				<Flex sx={{ gap: '20px' }} className="invert">
				<a id="whatsappButton" color="#FFF" fontSize="16" target="_blank" className="linkdesk" href="https://web.whatsapp.com/send?phone=5511910558501&amp;text=Olá, Gostaria de um Orçamento." rel="noreferrer">
					<Image  src="/images/midi.svg" alt="Pau Brasil - WhatsApp - Telefone" /></a>

				<a id="whatsappButton" color="#FFF" fontSize="16" target="_blank" className="linkmobile" href="https://api.whatsapp.com/send?phone=5511910558501" rel="noreferrer">
					<Image  src="/images/midi.svg" alt="Pau Brasil - WhatsApp - Telefone" /></a>


					<a  className="telefoneDesk corbranca" id="whatsappButton" rel="noreferrer"  fontSize="16" target="_blank" href="https://web.whatsapp.com/send?phone=5511910558501&amp;text=Olá, Gostaria de um Orçamento.">
					(11) 91055-8501
					</a>

					<Link id="whLinktsappButton"  target="_blank" className="linkmobile" href="https://api.whatsapp.com/send?phone=5511910558501" rel="noreferrer">
                        <Image  src="/images/whatsapp.svg" alt="Pau Brasil - WhatsApp - Telefone" />Solicite um Orçamento
                    </Link>

					
				</Flex>
			
			</Flex>
		</Box>

	);
} 
