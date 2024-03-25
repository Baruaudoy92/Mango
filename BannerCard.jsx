import React from 'react';
import './bannercard.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import des modules requis pour Swiper
import { EffectCards } from 'swiper/modules';

function BannerCard() {
  return (
    <>
    <div className='banner'> 
    <div className='right_swip'>
       {/* Utilisation de Swiper pour créer le carrousel */}
        <Swiper 
        effect={'cards'} // Effet de transition des cartes
        grabCursor={true} // Curseur prenant la forme d'une main au survol des cartes
        modules={[EffectCards]} // Utilisation du module EffectCards de Swiper
        className="mySwiper" 
      >
        {/* Chaque élément dans SwiperSlide représente une carte dans le carrousel */}
        <SwiperSlide>Demon Slayer (2018)</SwiperSlide>
        <SwiperSlide>Attack On Titan (2013)</SwiperSlide>
        <SwiperSlide>One piece (1998)</SwiperSlide>
        <SwiperSlide>MASHLE (2021)</SwiperSlide>
        <SwiperSlide>Naruto (2003)</SwiperSlide>
        <SwiperSlide>jujutsu kaisen (2020)</SwiperSlide>
        <SwiperSlide>Hunter x Hunter (1999)</SwiperSlide>
        <SwiperSlide>Dragon BAll Z (1996)</SwiperSlide>
        <SwiperSlide>Bleach (2005)</SwiperSlide>
        <SwiperSlide>Death note (2010)</SwiperSlide>
        <SwiperSlide>GTO : Great Teacher Onizuka (1999)</SwiperSlide>
        <SwiperSlide>Young GTO (2002)</SwiperSlide>
        <SwiperSlide>Young GTO (2002)</SwiperSlide>
        <SwiperSlide>Young GTO (2003)</SwiperSlide>
        <SwiperSlide>Young GTO (2004)</SwiperSlide>
        <SwiperSlide>Young GTO (2005)</SwiperSlide>
      </Swiper>
    </div>
    </div>
  </>
  )
}

export default BannerCard;