import { Box, Image } from 'rebass';
import Head from 'next/head'
import { Header } from '../src/componentes/header'
import { Servicos } from '../src/componentes/servicos';
import { TextBanner } from '../src/componentes/textbanner'
import { Quem } from '../src/componentes/quem';
import { Exp } from '../src/componentes/exp';
import { Contato } from '../src/componentes/contato';
import { Footer } from '../src/componentes/footer';
import React from 'react';
import Iframe from 'react-iframe';

export default function Home() {

  return (
    <>
      <Head>
      
        <title>Pousada SeaWay - Aproveite o que Caraguatatuba tem de melhor</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Work+Sans:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> 
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <Box>
        <Header />
      </Box>
      <Box >
        <TextBanner />
      </Box>

      <Box className="paddingGeral">
        <Quem />
      </Box>

      <Box  className="paddingGeralServicos">
        <Servicos  />
      </Box>

      <Box>
        <Exp />
      </Box>

      <Box className="paddingGeral" py={50}>
        <Contato />
      </Box>
      <Footer />

      <a id="whatsappButton" color="#FFF" fontSize="16" target="_blank" className="linkdesk whatsappflutuante" href="https://web.whatsapp.com/send?phone=5511910558501&text=Olá, Gostaria de um Orçamento." rel="noreferrer">
					  <Image src="/images/whatsapp-logo-1.png" width={50}/></a>

				<a id="whatsappButton" color="#FFF" fontSize="16" target="_blank" className="linkmobile whatsappflutuante" href="https://api.whatsapp.com/send?phone=5511910558501" rel="noreferrer">
					  <Image  src="/images/whatsapp-logo-1.png" width={50}/></a>
    </>
  )
} 
