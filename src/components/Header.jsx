import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const {isLoading,error,flights}=useSelector((store)=>store.flight)
  return (
    <header>
        <Link to={"/"} className='logo'>
        <img src="/logo.webp" alt="" width={40} /></Link>
        <h2>Uçuş Radarı</h2>
        <div className='buttons'>
            <NavLink to={"/"}>
                <button>Harita</button>
            </NavLink>
            <NavLink to={"/list"}>
                <button>Liste</button>
            </NavLink>
        </div>
        <h3>{isLoading ? "Uçuşlar Aranıyor" : flights.length+" "+  "Uçuş Bulundu"}</h3>
    </header>
  )
}

export default Header