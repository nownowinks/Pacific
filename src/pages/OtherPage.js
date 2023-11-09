import React from 'react'

const OtherPage = (props) => {
  return (
    <div className='container'>
            <h1 className='text-left pt-4'>{props.heading}</h1>
            <img src={props.image} alt="" srcset="" />
            <p>{props.para1}</p>
            <p>{props.para2}</p>
            
        </div>
  )
}

export default OtherPage