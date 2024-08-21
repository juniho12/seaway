import { Box, Flex, Image, Text, Link } from 'rebass';
import styles from './exp.module.scss';

export function Exp() {
	return(
        <>
            <Box  id="experiencia"  justifyContent="center" sx={{ gap: '80px'}} alignItems="center" className={styles.gridQuem}> 
                <Box className={styles.exp} justifyContent='space-between' mb={40}>
                        <Box className={styles.praia}>
                            Praias
                        </Box>
                        <Box className={styles.passeios}>
                            Passeios
                        </Box>
                </Box>               
               
            </Box>

          
        </>
	);
} 
