import { Box, Flex, Image, Text, Link } from 'rebass';
import styles from './contato.module.scss';



export function Contato() {
	return(
        <>
            <Box justifyContent="center" sx={{ gap: '80px'}} alignItems="center" className={styles.gridQuem}> 
                <Text className={styles.title2}><b>Localização</b></Text>
                <Box my={20}>
                        <iframe id="frame2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9457661412207!2d-45.27591482466952!3d-23.570391228793667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd5e6fa9bae3c1%3A0x761cbfb0b29b0879!2sPousada%20Seaway%20Flats!5e0!3m2!1sen!2sbr!4v1717125024653!5m2!1sen!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                    </Box>
                    {/* <Flex className={styles.contato} id="contato">
                        <iframe className="instagrampost" id="instagram-embed-0" 
                        src="https://www.instagram.com/p/Coh4VLzuyLw/embed/captioned/" height={430} scrolling='no' data-instgrm-payload-id="instagram-media-payload-0"  ></iframe>
                                <iframe className="instagrampost" id="instagram-embed-0" 
                        src="https://www.instagram.com/p/CuIQihGtJim/embed/captioned/" height={430} scrolling='no' data-instgrm-payload-id="instagram-media-payload-0"  ></iframe>
                                <iframe className="instagrampost" id="instagram-embed-0" 
                        src="https://www.instagram.com/p/Coh23CQOGZc/embed/captioned/" height={430} scrolling='no' data-instgrm-payload-id="instagram-media-payload-0"  ></iframe>
                    </Flex>  
                     */}
                    {/* <Box className={styles.titleorcamento}>
                        <Link id="whatsappButton" target="_blank" className="linkdesk" href="https://web.whatsapp.com/send?phone=5511910558501&text=Olá, Gostaria de um Orçamento." rel="nofollow noopener noreferrer">
                            <Image  src="/images/whatsapp.svg" alt="Quiosques & Cia - WhatsApp - Telefone" />Solicite um Orçamento
                        </Link>

                        <Link id="whatsappButton" className="linkmobile" target="_blank" href="https://api.whatsapp.com/send?phone=5511910558501" rel="nofollow noopener noreferrer">
                            <Image  src="/images/whatsapp.svg" alt="Quiosques & Cia - WhatsApp - Telefone" />Solicite um Orçamento
                        </Link>
                    </Box> */}
            </Box>
       </>
	);
} 
 