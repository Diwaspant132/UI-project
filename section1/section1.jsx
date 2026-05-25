import React from 'react'
import Navbar from './navbar'
import Page1content from './Page1content'

const Section1 = (props) => {
  console.log(props.users)
  return (
    <div className='h-screen w-full '>
       <Navbar /> 
       <Page1content users={props.users} />
    </div>
  )
}

export default Section1
