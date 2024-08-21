import { Box, Image, Text } from 'rebass';
import Head from 'next/head'
import { Headergalery } from '../src/componentes/Headergalery'
import { Footer } from '../src/componentes/footer';
import React from 'react';


export default function Home() {

  return (
    <>
      <Head>
      
        <title>Pau Brasil, de mairinque para toda São Paulo !</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Work+Sans:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> 
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <Box>
        <Headergalery backgroundColor="#000"  />
      </Box>
      <Box  className="gridallgalery2">
      <Text className="titleGallery"> Playground </Text>
        <Box  className="gridallgalery">
          <Image src="/images/playground/47345d23-255e-4496-9664-4b19edcf2551.jpg" />
          <Image src="/images/playground/brinquedos-em-eucalipto-tratado-em-auto-clave-14026-MLB129230746_6743-O.jpg" />
          <Image src="/images/playground/IMG_0211.jpg" />
          <Image src="/images/playground/IMG-20210328-WA0007.jpg" />
          <Image src="/images/playground/IMG-20211202-WA0024.jpg" />
        </Box>
      </Box>
      
      <Footer />

      <a id="whatsappButton" color="#FFF" fontSize="16" target="_blank" className="linkdesk whatsappflutuante" href="https://web.whatsapp.com/send?phone=5511910558501&amp;text=Olá, Gostaria de um Orçamento." rel="noreferrer">
					  <Image src="/images/whatsapp-logo-1.png" width={50}/></a>

				<a id="whatsappButton" color="#FFF" fontSize="16" target="_blank" className="linkmobile whatsappflutuante" href="https://api.whatsapp.com/send?phone=5511910558501" rel="noreferrer">
					  <Image  src="/images/whatsapp-logo-1.png" width={50}/></a>
    </>
  )
} 
