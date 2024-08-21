import {Text, Box, Link, Image, Flex} from 'rebass';
import styles from './textbanner.module.scss';
import Slider from "react-slick";
import React, { useState } from 'react';

export function TextBanner() {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tipoQuarto, setTipoQuarto] = useState('');
  const [hospedes, setHospedes] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    console.log('Start Date:', event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    console.log('End Date:', event.target.value);
  };

  const handleTipoQuartoChange = (event) => {
    setTipoQuarto(event.target.value);
    console.log('Tipo de Quarto:', event.target.value);
  };

  const handleHospedes = (event) => {
    setHospedes(event.target.value);
  };

  function openLinkInNewTab() {
    const url = "https://api.whatsapp.com/send?phone=5512997191952&text=Olá,+gostaria+de+consultar+a+disponibilidade+para+"+tipoQuarto+"+do+dia+"
    +startDate+"+até+"+endDate+"+para+"+hospedes+"+pessoas+obrigado!";
    // console.log(url)
    window.open(url, '_blank');
  }
  // Exemplo de uso

	return(
    <>
      <Box  id="home" justifyContent="space-between" alignItems="center" >
        <video src="/img/video.mp4" autoPlay loop muted className='videofull' ></video>  
        <Box className={styles.box}>
          <Box className={styles.box2}> 
          <Box className={styles.label}>
              <label>
                Acomodações
              </label>
              <select className={styles.input} value={tipoQuarto} onChange={handleTipoQuartoChange}>
                <option value="">Selecione</option>
                <option value="Flat">
                  Flat
                </option>
                <option value="Suíte">
                  Suíte
                </option>
            </select>
          </Box>
            <Box className={styles.label}>
              <label>
                De
              </label>
              <input className={styles.input} type='date' value={startDate} onChange={handleStartDateChange} />
            </Box>
            <Box className={styles.label}>
              <label>
                Até
              </label>
              <input className={styles.input} type='date' value={endDate} onChange={handleEndDateChange} />
            </Box>
            <Box className={styles.label}>
              <label>
                Hospedes
              </label>
              <input className={styles.input} type='number'value={hospedes} onChange={handleHospedes} />
            </Box>

            <button className={styles.inputbutton} onClick={openLinkInNewTab}>BUSCAR</button>
          </Box>
          </Box>
        </Box>
    </>

	);
} 
 