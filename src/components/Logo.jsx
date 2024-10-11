import React from 'react'

const Logo = ({isDasboard= false}) => {
  return (
    <div className={`w-fit h-10 text-blue-800 uppercase text-4xl ${isDasboard && 'text-2xl '} font-extrabold inline`}>S<span className={`text-black text-3xl ${isDasboard && 'text-xl'}`}>BL</span></div>
  )
}

export default Logo