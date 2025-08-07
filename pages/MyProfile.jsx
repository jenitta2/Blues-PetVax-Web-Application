import React, { useContext, useState } from 'react'
import {AppContext} from '../context/AppContext'
import {assets} from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyProfile = () => {

  const {userData,setUserData,token,backendUrl,loadUserProfileData}=useContext(AppContext)
  const [isEdit, setIsEdit] = useState(false)
  const [image,setImage]=useState(false)

  const updateUserProfileData = async()=>{

    try {
      
      const formData=new FormData()
            
      formData.append('ownername',userData.ownername)
      formData.append('pet',userData.pet)
      formData.append('petname',userData.petname)
      formData.append('petgender',userData.petgender)
      formData.append('firstvisit',userData.firstvisit)
      formData.append('phone',userData.phone)
      formData.append('address',JSON.stringify(userData.address))

      image && formData.append('image',image)

      const {data}= await axios.post(backendUrl+'/api/user/update-profile',formData,{headers:{token}})

      if(data.success){
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      }else{
        toast.error(data.message)
      }

    } catch (error) { 
        console.log(error);
        toast.error(error.message)
    }

  }

  return userData && (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>

      {
        isEdit
        ? <label htmlFor="image">
          <div className='inline-block relative cursor-pointer'>
            <img className='w-36 rounded opacity-75' src={image ? URL.createObjectURL(image):userData.image} alt="" />
            <img className='w-10 absolute bottom-12 right-12' src={image ? '':assets.upload_icon} alt="" />
          </div>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden />
        </label>
        :<img className='w-36 rounded' src={userData.image} alt="" />
      }
      
      
      {
        isEdit
       
          ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4 bg-gray-100' type="text" value={userData.ownername} onChange={e => setUserData(prev => ({ ...prev, ownername: e.target.value }))} />
          : <p className='font-medium text-xl text-neutral-800 mt-4'>Owner Name:{userData.ownername}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none'/>
      <div><div >
        <p className='text-neutral-500 underline mt-3'>INFORMATION ABOUT PET</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Type of pet:</p>
          <p>{userData.pet}</p>
          <p className='font-medium'>Name of pet: </p>
          {
            isEdit
              ? <input className='max-w-28 bg-gray-100' type="text" value={userData.petname} onChange={e => setUserData(prev => ({ ...prev, petname: e.target.value }))} />
              : <p>{userData.petname}</p>
          }
          <p className='font-medium'>Gender:</p>
          {
            isEdit
              ? <select className='max-w-28 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, petgender: e.target.value }))} value={userData.petgender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p>{userData.petgender}</p>
          }
          <p className='font-medium'>Visiting clinic from</p>
          {
            isEdit
            ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e)=>setUserData(prev=>({...prev,firstvisit:e.target.value}))} value={userData.firstvisit}/>
            : <p>{userData.firstvisit}</p>
          }
        </div>
      </div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email Id:</p>
          <p >{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit
              ? <p >
                <input  onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                <br />
                <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
              </p>
              : <p>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>
      
      <div className='mt-10'>
        {
          isEdit
          ? <button className='border border-primary px-8 py-2 rounded-full border-black hover:bg-primary hover:text-white transition-all' onClick={updateUserProfileData}>Save information</button>
          : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(true)}> Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
