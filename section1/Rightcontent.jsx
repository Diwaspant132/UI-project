import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  console.log(props.users)
  return (
    <div id='right' className='h-full w-2/3 flex flex-nowrap gap-10 rounded-4xl overflow-x-auto'>
    {props.users.map(function(elem,idx){

      return <Rightcard key={idx} id={idx}img={elem.img} tag={elem.tag} />
    })}

    </div>
  )
}

export default Rightcontent
