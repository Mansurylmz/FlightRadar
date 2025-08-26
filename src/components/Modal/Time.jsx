import React from 'react'
import t from "../../utils/formatDate"

const Time = ({data}) => {
  return (
    <div className='time'>
      <div>
      <span>Planlanan</span>
      <span>{t(data?.scheduled?.departure)}</span>
      </div>
      <div>
      <span>Planlanan</span>
      <span>{t(data?.scheduled?.arrival)}</span>
      </div>
      <div>
      <span>Gerçek.</span>
      <span>{t(data?.scheduled?.departure)}</span>
      </div>
      <div>
      <span>Tahmini</span>
      <span>{t(data?.scheduled?.arrival)}</span>
      </div>
    </div>
  )
}

export default Time