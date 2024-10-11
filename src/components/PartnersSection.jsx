
import React, { useState } from 'react';
import Carousel from './Carousel';
import PartnerCard from './PartnerCard';

const PartnersSection = () => {
    const slides = [
        <PartnerCard partnerImgURL="/Frame1.png"/>,
        <PartnerCard partnerImgURL="/Frame13.png"/>,
        <PartnerCard partnerImgURL="/Frame14.png"/>,
        <PartnerCard partnerImgURL="/Frame15.png"/>,
        
    ]
    


    return (
        <section className='h-[450px] bg-white flex justify-center items-center flex-col'>
            <h1 className='uppercase tracking-wide'>Business Partners</h1>
            <Carousel carouselItems={slides}/>
        </section>
    );
};

export default PartnersSection;
