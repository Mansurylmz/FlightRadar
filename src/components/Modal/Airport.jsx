import React from 'react'

const Airport = ({data}) => {
  return (
    <div className='airport'>
        <div>
            <h2>{data?.origin?.code?.iata}</h2>
            <h3>{data?.origin?.position?.region?.city}</h3>
            <span>({data?.origin?.timezone?.abbr}) <br/>  ({data?.origin?.timezone?.name})</span>
        </div>
        <div className='icon'>
            <img src="/plane_icon.png" alt="" />
        </div>
        <div>
            <h2>{data?.destination?.code?.iata}</h2>
            <h3>{data?.destination?.position?.region?.city}</h3>
            <span>({data?.destination?.timezone?.abbr}) <br/> ({data?.destination?.timezone?.name})</span>
        </div>
    </div>
  )
}

export default Airport