import React from 'react'
import {specialityData} from '../assets/assets'
import {Link} from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800' >
      <h1 className='text-3xl font-medium'>Treatments available here</h1>
      <p className='sm:w-1/3 text-center text-sm'>Choose anyone from the option listed below<br/>according to your pets need
      </p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {specialityData.map((item,index)=>(
            <Link className='flex flex-col items-center text-sx cursour-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                <img className='w-16 sm:w-24 mb-2' src={item.image} alt=""/>
                <p className=''>{item.speciality}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
