import {Text, Box, Link, Image, Flex} from 'rebass';
import Slider from "react-slick";
import styles from './servicos.module.scss';
import React, { useEffect, useState } from 'react';

export function Servicos() {
    
    const settings = { 
        dots: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
              },
            }
          ],
    };

 	return(
        <Box id="servicos"  maxWidth={1260} sx={{ margin: '0 auto'}} py={50} >
            <Text className={styles.title2}>Acomodações <b>Pousada Seaway</b></Text>

            <Box mt={40}>
                <Box className={styles.box}>
                    <Text className={styles.title}>Apartamentos (Suítes)</Text>
                </Box>
                
                   
                <Flex sx={{ gap: '10px', justifyContent: 'space-between' }}>
                    <video src='/img/suite.mp4' controls height="500"  autoplay="true" />
                    <Box className={styles.suite}>
                        <img src="/img/suite.jpg" />
                    </Box>
                    <Box className={styles.suite}>
                        <img src="/img/suite2.jpg" />
                    </Box>
                    <Box className={styles.suite}>
                        <img src="/img/suite3.jpg" />
                    </Box>

                </Flex>
            </Box>

            <Box mt={50}>
                <Box className={styles.box}>
                    <Text className={styles.title}>Flats</Text>
                </Box>
                <Flex sx={{ gap: '10px', justifyContent: 'space-between' }}>
                    <video src='/img/flats.mp4' controls height="500"  autoplay="false" />

                    <Box className={styles.suite}>
                        <img src="/img/flag.jpeg" />
                    </Box>
                    <Box className={styles.suite}>
                        <img src="/img/flat1.jpeg" />
                    </Box>
                    <Box className={styles.suite}>
                        <img src="/img/flat2.jpeg" />
                    </Box>
                </Flex>
            </Box>
             
             <Box mt={50}>
                <Text className={styles.title2}>Vantagens da <b>Pousada Seaway</b></Text>
                    <Flex className={styles.gridQuem} sx={{ justifyContent: 'space-between'}} mt={50}>
                        <Box className={styles.itens}>
                            <img src="/img/piscina.webp" />
                            <Text>Piscina</Text>
                        </Box>
                        <Box className={styles.itens}>
                            <img src="/img/churras.webp" />
                            <Text>Churrasqueira</Text>
                        </Box>
                        <Box className={styles.itens}>
                            <img src="/img/wifi.webp" />
                            <Text>Wifi</Text>
                        </Box>
                        <Box className={styles.itens}>
                            <img src="/img/gurdasol.webp" />
                            <Text>Cadeira e guarda-sol</Text>
                        </Box>
                        <Box className={styles.itens}>
                            <img src="/img/estacina.webp" />
                            <Text>Estacionamento</Text>
                        </Box>
                        <Box className={styles.itens}>
                            <img src="/img/tv.webp" />
                            <Text>TV de LED</Text>
                        </Box>

                        <Box className={styles.itens}>
                            <img src="/img/ar_condicionado.webp" />
                            <Text>Ar condicionado</Text>
                        </Box>
                        <Box className={styles.itens}>
                            <img src="/img/cafe.webp" />
                            <Text>Café da manha (suíte)</Text>
                        </Box>
                    </Flex>
            </Box>
        </Box>
	);
} 
 