import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import{AppContext} from '../context/AppContext'

const Doctors = () => {
  const{speciality} = useParams()
  const [filterTreatments, setFilterTreatment]=useState([])
  const [showFilter,setShowFilter]=useState(false)
  const navigate=useNavigate()
  const {doctors}=useContext(AppContext)
  

  const applyFilter=()=>{
    if(speciality){
      setFilterTreatment(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterTreatment(doctors)
    }
  }

  useEffect(()=>{
      applyFilter()
  },[doctors,speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the treatment procedures</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter?'bg-primary text-white' :''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ?'flex':'hidden sm:flex'}`}>
            <p onClick={()=> speciality==='General checkup'?navigate('/doctors'):navigate('/doctors/General checkup')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="General checkup" ? "bg-indigo-100 text-black" : ""}`}>General checkup</p>
            <p onClick={()=> speciality==='Skin related'?navigate('/doctors'):navigate('/doctors/Skin related')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Skin related" ? "bg-indigo-100 text-black" : ""}`}>Skin related</p>
            <p onClick={()=> speciality==='Vaccination'?navigate('/doctors'):navigate('/doctors/Vaccination')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Vaccination" ? "bg-indigo-100 text-black" : ""}`}>Vaccination</p>
            <p onClick={()=> speciality==='Oral health'?navigate('/doctors'):navigate('/doctors/Oral health')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Oral health" ? "bg-indigo-100 text-black" : ""}`}>Oral health</p>
            <p onClick={()=> speciality==='Operations'?navigate('/doctors'):navigate('/doctors/Operations')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Operations" ? "bg-indigo-100 text-black" : ""}`}>Operations</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gay-y-6'>
          {
              filterTreatments.map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                    <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500': 'text-gray-500'} `}>
                        <p className={`w-2 h-2 ${item.available ?'bg-green-500' :'bg-gray-500'}  rounded-full`}></p><p>{item.available ?'Available' : 'Not Available'}</p>
                    </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors
