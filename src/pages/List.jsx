import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import "bootstrap/dist/css/bootstrap.min.css"
import c from "../utils/nullCheck"
import { open } from '../redux/slices/detailSlice'
import ReactPaginate from 'react-paginate';

const List = () => {
  
  const dispatch=useDispatch()
  const {flights,isLoading}=useSelector((store)=>store.flight)

  //kaçıncı elemandan itibaren kesilecek
  const [start,setStart]=useState(0);

  //sayfa başına eleman sayısı
  const perPage=12;

  //kaçıncı elemana kadar kesicez
  const end=start+perPage;

  //slice metodu ile başlangıç ve bitiş arasını kes
  const currFlights=flights.slice(start,end)

  //toplam sayfa sayısı
  const total=Math.ceil(flights.length/perPage)

  //yeni sayfaya tıklayıncı
  const handlePage=(event)=>{
    setStart(event.selected*10)
  }

  if(isLoading) return <div className='list-wrapper'><Loader/></div>
  return (
    <div className='list-container'>
      <table className="table table-hover table-responsive">
  <thead>
    <tr>
      <th >İd</th>
      <th >Kod</th>
      <th >Enlem</th>
      <th >Boylam</th>
      <th >Derece</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {currFlights.map((flight)=>(
         <tr>
         <td>{c(flight.id)}</td>
         <td>{c(flight.code)}</td>
         <td>{c(flight.lat)}</td>
         <td>{c(flight.lng)}</td>
         <td>{c(flight.deg)}</td>
         <td>
          <button onClick={()=>dispatch(open(flight.id))}>Detay</button>
         </td>
       </tr>
    ))}
 
    
  </tbody>
</table>
<div className='pagination-wrapper'>
<ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePage}
        pageRangeDisplayed={3}
        pageCount={total}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className='pagination'
      />
      </div>
    </div>
  )
}

export default List