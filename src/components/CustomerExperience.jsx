import React from 'react'
import CustomerExperienceCard from './CustomerExperienceCard'
import { experienceCardData } from '../Data/SampleData'

const CustomerExperience = () => {
const experienceCard = experienceCardData;

  return (
    <section className='bg-white my-4 p-10 flex flex-col justify-center'>
        <div>
        <h1 className='text-center text-2xl font-bold mb-2'>Creating Extraordinary Customer Experience</h1>
        <p className='text-xs text-center text-gray-400 px-5 w-[40%] self-center m-auto'>At SBL, we redefine banking with a seamless, personalized experience tailored to your needs.</p>
        </div>
        <div className='flex flex-wrap gap-6 my-6'>
            {
                experienceCard.map((card) => (
                    <CustomerExperienceCard key={card.title} ImgUri={card.imgUrl || "Hello"} title={card.title} cardDescription={card.description}/>
                ))
            }
        </div>
    </section>
  )
}

export default CustomerExperience