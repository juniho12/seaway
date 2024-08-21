import React, { useEffect, useState } from 'react';
import {Box, Text, Flex, Image} from 'rebass';
import { Link, animateScroll as scroll } from "react-scroll";

import styles from './header.module.scss';

export function Header() {

	const [state, setState] = useState(false);

	function openMenu(){
		const open = !state;
		setState(open);
		console.log(state);
	}

	useEffect(() => {
		
	}, [state]);
	
	
	const [headerClassName, setHeaderClassName] = useState('menudontscroll');

	const handleScroll = (headerClassName) => {
		if (headerClassName !== 'menuscroll' && window.pageYOffset >= 150) {
			setHeaderClassName('menuscroll');
		} else if (headerClassName === 'menuscroll' && window.pageYOffset < 100) {
			setHeaderClassName('menudontscroll');
		}
	}

	useEffect(() => {
		window.onscroll = () => handleScroll(headerClassName);
	}, [headerClassName]); // IMPORTANT, This will cause react to update depending 

	const [scroll, setScroll] = useState(false); 
	useEffect(() => {
		window.addEventListener("scroll", () => { 
			setScroll(window.scrollY > 50); 
		});
	}, []);

	return(
		<Box  className={ state == true ? "activemenumobile" : "hidemenuTopo"}>
			<Box>
				
				<Flex justifyContent="space-between" alignItems="center" py={15}  className={headerClassName}>
					<Box width={230}>
						<Image src="/img/logo.webp" alt="Pousada Seaway" width={140}/>
					</Box>
					<Box className="floatmenu">
						<Flex className={styles.menuMobile} alignItems="center" sx={{ gap: '30px'}} > 
							{[
								{
									name: 'Home',
									link: 'home'
								},
								{
									name: 'Pousada',
									link: 'servicos'
								},
								{
									name: 'Acomodações',
									link: 'acomodacoes'
								},
								{
									name: 'Passeios',
									link: 'portifolio' 
								},
								{
									name: 'Contato',
									link: 'contato'
								},

							].map((item, i) => (
								<Flex key={item.name + i}  >
									<Link 
										className={styles.link}
										color="#FFF"  
										to={item.link}
										spy={true} 
										smooth={true} 
										offset={-130} 
										duration={500} 
										variant='nav'>
										{item.name}
									</Link>
								</Flex>
							))}
						</Flex>
						<Box>
							<Box className={styles.midiasFlex}>
								<Box sx={{ gap: '15px'}} justifyContent="center" mt={30} className={styles.midiasFooter}> 
									<a href="https://www.instagram.com/paubrasil_projetos/" target='_blank' rel="nofollow noopener noreferrer">
										<Image className={styles.widthImgHeader} src="/images/instagram.svg"/>
									</a>
									<a target='_blank' rel="nofollow noopener noreferrer" href="https://www.google.com/search?q=Quiosque+e+cia&sxsrf=ALiCzsYHRzdSj1txtOCGilwKhHyjule7fg%3A1668624958401&ei=PjJ1Y6KPGIq75OUPlLmNyAU&ved=0ahUKEwiipqKvsLP7AhWKHbkGHZRcA1kQ4dUDCA8&uact=5&oq=Quiosque+e+cia&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIICAAQFhAeEA8yAggmOgoIABBHENYEELADSgQIQRgASgQIRhgAUNkCWNkCYLcGaAFwAXgAgAF6iAF6kgEDMC4xmAEAoAEByAEIwAEB&sclient=gws-wiz-serp">
										<Image className={styles.widthImgHeader} src="/images/google.svg"/></a>
									<a id="whatsappButton"  className="linkmobile" target="_blank" href="https://api.whatsapp.com/send?phone=5511910558501" rel="nofollow noopener noreferrer">
										<Image className={styles.widthImgHeader}  width={35} src="/images/whatsapp.svg" alt="Quiosques & Cia - WhatsApp - Telefone" />
									</a>
								</Box>
							</Box>
						</Box>
					</Box>
					<Flex sx={{ gap: '20px' }} className="invert">
						<Box className={styles.boxreserve}>
							<a>
								RESERVAR AGORA
							</a>
						</Box>
					</Flex>
					<Box className={styles.menuMobileButton} onClick={openMenu}>
						<Box className={styles.hamb}></Box>
						<Box className={styles.hamb}></Box>
					</Box>
				</Flex>
			</Box>
		</Box>

	);
} 
