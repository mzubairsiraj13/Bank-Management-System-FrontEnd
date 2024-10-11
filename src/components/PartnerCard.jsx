import React from 'react'

const PartnerCard = ( {partnerImgURL= ""}) => {

  return (
    <div className='min-w-full flex justify-center items-center'><img src={partnerImgURL} alt="" className='size-fit'/></div>
  )
}

export default PartnerCard