import { Box, Flex, Image, Text, Link } from 'rebass';
import styles from './quem.module.scss';
import Slider from "react-slick";


export function Quem() {

    const settings = { 
        dots: false,
        infinite: false,
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1,
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
        <>
            <Box  id="quem-somos"  py={50} justifyContent="center" sx={{ gap: '80px'}} alignItems="center" className={styles.gridQuem}> 
                
                <Box maxWidth={498}>
                    {/* <Box className={styles.title}>
                        <Text>Pousada Seaway</Text>
                    </Box> */}
                    <Text className={styles.text2}>Aproveite o que Caraguatatuba tem de melhor</Text>
                    <Text className={styles.text}>

                        <b>Já são 20 anos de alegria!!</b> Receber pessoas aqui na Pousada Seaway é algo que sempre nos motivou e ensinou muito.

                        Começamos apenas com 7 flats acomodando até 5 adultos e 1 criança e, também, com uma pequena área de lazer. Com o sucesso ampliamos nossa área de lazer com uma piscina maior e uma lanchonete.

                        E não paramos por ai, ampliamos mais ainda construindo Suites para até 4 pessoas e tem dado super certo para casais com ou sem filhos. 

                        <b> É muito gratificante trabalhar com qualidade, eficiência e capricho para receber você em nossas instalações, e com isso, ver a sua satisfação como nosso cliente. </b>

                        Venha se hospedar na Pousada Seaway e aproveitar merecidos dias de descanso e lazer!</Text>

                    <Text className={styles.text}>Entre em contato para fechar seu final de semana conosco!</Text>
                    <Box className={styles.titleorcamento}>
                        <Link id="whatsappButton" target="_blank" className="linkdesk" href="https://web.whatsapp.com/send?phone=5511910558501&text=Olá, Gostaria de um Orçamento." rel="nofollow noopener noreferrer">
                            <Image  src="/images/whatsapp.svg" alt="Pousada SeaWay - WhatsApp - Telefone" />RESERVAR AGORA
                        </Link>
                        <Link id="whatsappButton"  target="_blank" className="linkmobile" href="https://api.whatsapp.com/send?phone=5511910558501" rel="nofollow noopener noreferrer">
                            <Image  src="/images/whatsapp.svg" alt="Pousada SeaWay - WhatsApp - Telefone" />RESERVAR AGORA
                        </Link>
                    </Box>
                </Box>
                <Box>
                    <Slider  {...settings} sx={{ border: '1px solid #000000' }}  >
                        {/* <Box>
                            <Image src="/img/sobre.jpg" />
                        </Box>  */}
                        <Box>
                            <Image src="/img/sobre3.avif" />
                        </Box>  
                        <Box>
                            <Image src="/img/sobre2.avif" />
                        </Box> 

                    </Slider>
                </Box>

            </Box>

        </>
	);
} 
