import { Box, Flex, Image,  Text } from 'rebass';
import styles from './Footer.module.scss';
import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";



export function Footer() {

    const [state, setState] = useState(false);

	function openMenu(){
		const open = !state;
		setState(open);
		console.log(state);
	}

	useEffect(() => {
		
	}, [state]);
	
	const [end, setEnd] = useState(false);
	const [tel, setTel] = useState(false);

	function openTel(){
		const openTel = !tel;
        setTel(openTel);
	}
    function openEnd(){
		const openEnd = !end;
        setEnd(openEnd);      
	}

	useEffect(() => {
		
	}, [end, tel]);

	return(
        <>
            <Flex className={styles.footer}>
                <Box className={styles.midiasFlex}>
                <Image src="/img/logo.webp" alt="Pousada SeaWay" width={180}/>

                    <Flex sx={{ gap: '15px'}} justifyContent="center" alignItems='flex-start' mt={30} className={styles.midiasFooter}> 
                    <a rel="nofollow noopener noreferrer"href="https://www.instagram.com/pousadaseaway/" target='_blank'><Image src="/images/instagram.svg"/></a>
								<a target="_blank" rel="nofollow noopener noreferrer"  href="https://www.google.com/maps/dir//google+pousada+sea+way/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94cd5e6fa9bae3c1:0x761cbfb0b29b0879?sa=X&ved=1t:3061&ictx=111">
                                    <Image width={25} src="/img/gps.png"/>
                                </a>
                                <a id="whatsappButton" target="_blank" className="linkdesk" href="https://web.whatsapp.com/send?phone=5512997191952" rel="nofollow noopener noreferrer">
                                    <Image  src="/images/whatsapp.svg" alt="Pousada SeaWay - WhatsApp - Telefone" />
                                </a>
                                <a id="whatsappButton" className="linkmobile" target="_blank" href="https://api.whatsapp.com/send?phone=5512997191952" rel="nofollow noopener noreferrer">
                                    <Image  src="/images/whatsapp.svg" alt="Pousada SeaWay - WhatsApp - Telefone" />
                                </a>
                    </Flex>
                </Box>
               
                <Box className={styles.gridFooter}>
                    <a  target='_blank' href="https://www.tripadvisor.com.br/Hotel_Review-g675037-d2558095-Reviews-Pousada_Seaway-Caraguatatuba_State_of_Sao_Paulo.html">
                        <img className={styles.trip} src="/img/trip.jpg" />
                    </a>
                    
                </Box>
             
                <Box className={styles.maxWidthunset} maxWidth={249} marginBottom={20}>
                    <Box className={ tel == true ? "activethissectin1" : "222"}>
                        <Text className={styles.titleEnd} onClick={openTel}>Faça sua reserva</Text>
                    </Box>
                    <Box className={ tel == true ? "activethissectin" : "hidemenu"}>


                            <Link id="whatsappButton" target="_blank" className="linkdesk footerwhat" href="https://web.whatsapp.com/send?phone=5512997191952" rel="nofollow noopener noreferrer">
                                <img src="/images/whatsapp-logo-1.png" />
                                <Text className={styles.subEnd} >(12) 99719-1952</Text>
                            </Link>

                            <Link id="whatsappButton" target="_blank" className="linkdesk footerwhat" href="https://web.whatsapp.com/send?phone=55119996771911" rel="nofollow noopener noreferrer">
                                <img src="/images/whatsapp-logo-1.png" />
                                <Text className={styles.subEnd} >(11) 99967-7191</Text>
                            </Link>

                            <Link id="whatsappButton" className="linkmobile footerwhat" target="_blank" href="https://api.whatsapp.com/send?phone=55119996771911" rel="nofollow noopener noreferrer">
                                <img src="/images/whatsapp-logo-1.png" />
                                <Text className={styles.subEnd} >(11) 99967-7191</Text>
                            </Link>

                            <Link id="whatsappButton" className="linkmobile footerwhat" target="_blank" href="https://api.whatsapp.com/send?phone=5512997191952" rel="nofollow noopener noreferrer">
                                <img src="/images/whatsapp-logo-1.png" />
                                <Text className={styles.subEnd} >(12) 99719-1952</Text>
                            </Link>
                    
                    </Box>
                </Box>
                <Box className={styles.maxWidthunset} maxWidth={398}>
                    <Box className={ end == true ? "activethissectin1" : "222"}>
                        <Text className={styles.titleEnd} onClick={openEnd}>
                            Endereço
                        </Text>
                    </Box>
                    <Box className={ end == true ? "activethissectin" : "hidemenu"}>
                    <Link target="_blank" href="https://goo.gl/maps/xPSYjSp21ae13aew7"><Text className={styles.subEnd}>Av. Eurico Gaspar Dutra, 65, Praia da Tabatinga, Caraguatatuba - SP, CEP: 11679-200, Brasil</Text></Link>
                    </Box>
                </Box>
            </Flex>
            <Box className={styles.footer2}>
                <Text fontSize={16} fontWeight={400}>Copyright © 2024, SeaWay.</Text>
            </Box>
        </>
	);
} 
 