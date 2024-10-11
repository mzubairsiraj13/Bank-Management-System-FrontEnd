import React from 'react'

const CustomButton = ({isLoading = false, BtnText = "Submit", OnClick, className = "" }) => {
  return (
    <button className={`w-full bg-blue-700 py-2 px-4 rounded-md text-center font-medium ${className} flex justify-center items-center  text-white cursor-pointer`} onClick={OnClick}>
        {isLoading ?   <div className='size-7  border-2 border-dotted border-t-blue-800 animate-spin duration-500 rounded-full'></div>   : (BtnText)}
    </button>
  )
}

export default CustomButton