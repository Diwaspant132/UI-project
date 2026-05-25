import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='py-10 h-[90vh] flex items-center gap-10 '>
        <Leftcontent />
        <Rightcontent users={props.users} />
      
    </div>
  )
}

export default Page1content
