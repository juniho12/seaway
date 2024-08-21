import { Box, Flex, Image, Text, Button } from 'rebass';
import styles from './Galeria.module.scss';
import React, { useEffect, useState } from 'react';



export function Galeria() {

    
    const [state, setState] = useState('aparadores');
    const [model, setModel] = useState('madeira');

	useEffect(() => {
		
	}, [state, model]);


	return(
        <Box className='paddingfinal2'>
      
            <Box className={styles.ease}>
            <Box py={50} id="portifolio"> 
              
                <Box className={styles.title}>
                    <Text>Produtos</Text>
                </Box>
            </Box>
         
            <Box className={styles.collapseButton2}  justifyContent="center" sx={{ gap: '30px'}}>
                <Button className={model === 'madeira' ? 'showButton' : 'showButtonOff'}marginRight={30} onClick={() => setModel('madeira')}>Moveis Rusticos</Button>
                <Button className={model === 'fibra' ? 'showButton' : 'showButtonOff'} onClick={() => setModel('fibra')} >Projetos em Madeira</Button>
            </Box>

            <Box className={model === 'madeira' ? 'showSection' : 'colapseimages'} justifyContent="space-between" mt={30}>
                <Button onClick={() => setState('aparadores')} className={styles.colapseclosed}>Aparadores</Button>
                <Button onClick={() => setState('balanco')} className={styles.colapseclosed}>Balanço</Button>
                <Button onClick={() => setState('namoradeira')} className={styles.colapseclosed}>Bancos</Button>
                <Button onClick={() => setState('espreguicadeira')} className={styles.colapseclosed}>Espreguiçadeira</Button>
                <Button onClick={() => setState('fruteira')} className={styles.colapseclosed}>Fruteira Aparador</Button>
                <Button onClick={() => setState('mesa')} className={styles.colapseclosed}>Mesa de Centro</Button>

                <Button onClick={() => setState('mesamadeira')} className={styles.colapseclosed}>Mesas de Madeira</Button>
                <Button onClick={() => setState('poltronamadeira')} className={styles.colapseclosed}>Poltrona</Button>
                <Button onClick={() => setState('rack')} className={styles.colapseclosed}>Rack</Button>
                <Button onClick={() => setState('sofa')} className={styles.colapseclosed}>Sofá</Button>
                <Button onClick={() => setState('cristaleira')} className={styles.colapseclosed}>Cristaleira</Button>
            </Box>

            <Box className={model === 'fibra' ? 'showSection' : 'colapseimages'}sx={{ gap: '20px'}} mt={30} >
                <Button onClick={() => setState('sofafibra')} className={styles.colapseclosed}>Quiosque</Button>
                <Button onClick={() => setState('balancofibra')} className={styles.colapseclosed}>Brise</Button>
                <Button onClick={() => setState('chaises')} className={styles.colapseclosed}>Deck</Button>
                <Button onClick={() => setState('mesafibra')} className={styles.colapseclosed}>Pergolado</Button>
                <Button onClick={() => setState('espreguicadeirafibra')} className={styles.colapseclosed}>Playground</Button>
            </Box>
            
            <Box className={state === 'balancofibra' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Image src="/images/obras/brise (1).jpg" sx={{maxWidth: '500px'}} />
                <Image src="/images/obras/brise (2).jpg" sx={{maxWidth: '500px'}}/>
            </Box>

            <Box className={state === 'chaises' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Box className='gridall2'>
                    <Image src="/images/decknew.jpg" />
                    <Image src="/images/obras/deck (2).jpg" />
                    <Image src="/images/obras/deck (3).jpg" />
                </Box>
        
            </Box>

            <Box className={state === 'espreguicadeirafibra' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Box className='gridall2'>
                    <Image src="/images/obras/play (1).jpg" />
                    <Image src="/images/obras/play (2).jpg" />
                    <Image src="/images/obras/play (3).jpg" />
                </Box>
            </Box>

            <Box className={state === 'sofafibra' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Box className='gridall2'>
                    <Image src="/images/obras/quiosque (1).jpg" />
                    <Image src="/images/obras/quiosque (2).jpg" />
                    <Image src="/images/obras/quiosque (3).jpg" />
                    
                </Box>
            </Box>

            <Box className={state === 'aparadores' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Image src="/images/aparador.jpg" />
                <Image src="/images/aparador2.jpg" />
                <Image src="/images/aparador3.jpg" />
                <Image src="/images/aparador4.jpg" sx={{maxWidth: '380px'}}/>
            </Box>

            <Box className={state === 'balanco' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Image src="/images/balanco.jpg" />
                <Image src="/images/balanco2.jpg" />
            </Box>
            
            <Box className={state === 'aparador' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Image src="/images/aparador.jpg" />
                <Image src="/images/aparador2.jpg" />
                <Image src="/images/aparador3.jpg" />
            </Box>

            
            <Box className={state === 'espreguicadeira' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Image src="/images/espreguicadeira-madeira.jpg" />
                <Image src="/images/espreguicadeira-madeira4.jpg" />
                <Image src="/images/espreguicadeira-madeira6.jpg" />
                <Image src="/images/namoradeira5.jpg" sx={{maxWidth: '380px'}} />
            </Box>

            <Box className={state === 'fruteira' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Image src="/images/fruteira.jpg" />
                <Image src="/images/aparadornew1.jpg" sx={{maxWidth: '380px'}}/>
                <Image src="/images/aparadornew2.jpg" sx={{maxWidth: '380px'}}/>
                <Image src="/images/aparadornew3.jpg" sx={{maxWidth: '380px'}}/>
                
            </Box>

            <Box className={state === 'mesacentro' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Image src="/images/mesas/mesas (1)jpg" />
                <Image src="/images/mesas/mesas (2).jpg" />
                <Image src="/images/mesas/mesas (3).jpg" />
                <Image src="/images/mesas/mesas (4).jpg" />
            </Box>

            <Box className={state === 'mesa' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Box className='gridall2'>
                    <Image src="/images/mesacentro.jpg" />
                    <Image src="/images/mesacentro1.jpg" />
                    <Image src="/images/mesacentro2.jpg" />
                    <Image src="/images/mesacentro3.jpg" />
                </Box>
            </Box>

            <Box className={state === 'mesamadeira' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Box className='gridall2'>
                    <Image src="/images/mesa.jpg" />
                    <Image src="/images/mesa9.jpg" />
                    <Image src="/images/mesa5.jpg" />
                    <Image src="/images/mesa_fibra2.jpg" />
                </Box>
            </Box>

            
            <Box className={state === 'poltronamadeira' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Image src="/images/poltrona2.jpg" />
                <Image src="/images/poltrona3.jpg" />
                <Image src="/images/poltrona4.jpg" />
            </Box>
            <Box className={state === 'rack' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Image src="/images/rack2.jpg" />
                <Image src="/images/rack7.jpg" />
                <Image src="/images/rack8.jpg" />
            </Box>
            <Box className={state === 'sofa' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Image src="/images/sofa.jpg" />
                <Image src="/images/sofa2.jpg" />
            </Box>
            <Box className={state === 'cristaleira' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Image src="/images/cristaleira.jpg" />
                <Image src="/images/cristaleira2.jpg" />
            </Box>
            <Box className={state === 'buffet' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Image src="/images/buffet.jpg" />
            </Box>

            <Box className={state === 'namoradeira' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Box className='gridall2'>
                <Image src="/images/namoradeira.jpg" />
                <Image src="/images/namoradeira2.jpg" />
                <Image src="/images/bancoall4.jpg" />
                <Image src="/images/bancoall2.jpg"  />
                </Box>
            </Box>

            
            <Box className={state === 'mesafibra' ? 'showSection' : 'colapseimages'} mt={40} sx={{ gap: '10px'}}>
                <Box className='gridall2'>
                    <Image src="/images/obras/pergolado (4).jpg" />
                    <Image src="/images/obras/pergolado (1).jpg" />
                    <Image src="/images/obras/pergolado (2).jpg" />
                    <Image src="/images/obras/pergolado (3).jpg" />
                </Box>
            
            </Box>
         
        </Box>

        </Box>
	);
} 
 