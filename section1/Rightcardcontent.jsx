import React from 'react'

const Rightcardcontent = (props) => {
  return (
      <div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between '>
            <h2 className='bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id + 1}</h2>
            <div>
                <p className='shadow-2xs text-xl leading-relaxed text-white mb-14 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora consectetur est laboriosam aut qui ab?</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default Rightcardcontent
