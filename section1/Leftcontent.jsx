import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './herotext'
import Arrow from './arrow'

const Leftcontent = () => {
  return (
    <div className='justify-between flex flex-col h-full w-1/3 '>
        <HeroText />
        <Arrow />
    </div>
  )
}

export default Leftcontent
