import React from 'react'
import { IoAirplaneOutline } from 'react-icons/io5'

const Aircraft = ({data}) => {
  return (
    <div className='aircraft'>
      <div className='icon'><IoAirplaneOutline/></div>
      <div>
       <p>
       <span className='title'>Uçak Tipi</span>
       <span>{data?.model?.text}</span>
       </p>
       <div>
       <p>
       <span className='title'>Kuyruk Kodu</span>
       <span>{data?.registration}</span>
       </p>
       <p>
       <span className='title'>Ülke  İd</span>
       <span>{data?.countryId}</span>
       </p>
       </div>
      </div>
    </div>
  )
}

export default Aircraft