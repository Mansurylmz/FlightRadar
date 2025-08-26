import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../../redux/actions'
import Head from './Head'
import Loader from '../Loader'
import Gallery from './Gallery'
import Airport from './Airport'
import Time from './Time'
import Aircraft from './Aircraft'

const Modal = () => {
    const {detailId,isLoading,error,info}=useSelector((store)=>store.detail)
    
    const dispatch=useDispatch()
    useEffect(()=>{
        if(!detailId) return;
        dispatch(getDetail(detailId))
    },[detailId])
    
  return (
    detailId && (
        <div className='modal-outer'>
            <div className='modal-inner'>
            <Head info={info}/>
           {isLoading ? <Loader/> : info && (
            <div className='info-wrapper'>
                <Gallery data={info.aircraft.images} />
                <Airport data={info.airport} />
                <Time data={info.time} />
                <Aircraft data={info.aircraft} />
            </div>
           ) }
           </div>
            </div>
    )
  )
}

export default Modal