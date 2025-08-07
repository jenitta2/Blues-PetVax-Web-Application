import doctorModel from '../models/doctorModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointmentModel.js'

const changeAvailability=async(req,res)=>{
    try {
        const {docId}=req.body
        const docData=await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId,{available: !docData.available})
        res.json({success:true,message:'Availability changed'})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const doctorList= async (req,res) => {
    try {
        const doctors=await doctorModel.find({}).select(['-email','-password'])
        res.json({success:true,doctors})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const loginDoctor = async (req,res) => {
    try {
        
        const {email,password} = req.body
        const doctor = await doctorModel.findOne({email})

        if(!doctor){
            return res.json({success:false,message:"Invalid credentials"})
        }

        const isMatch = await bcrypt.compare(password,doctor.password)

        if(isMatch){
            const token = jwt.sign({id:doctor._id},process.env.JWT_SECRET)
            res.json({success:true,token})
        }else{
            res.json({success:false,message:"Invalid credentials"})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const appointmentsList = async (req,res) => {
    try {
        
        const {docId} = req.body
        const appointments = await appointmentModel.find({docId})

        res.json({success:true,appointments})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const appointmentsCompleted = async (req,res) => {
    try {

        const {docId,appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId,{isCompleted:true})
            return res.json({success:true,message:'Appointment Completed Successfully'})
        }else{
            return res.json({success:false,message:'Mark failed'})
        }
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const appointmentsCancelled = async (req,res) => {
    try {

        const {docId,appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})
            return res.json({success:true,message:'Appointment Cancelled'})
        }else{
            return res.json({success:false,message:'Cancellation failed'})
        }
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const doctorDashboard = async (req,res) => {
    try {

        const {docId} = req.body
        const appointments = await appointmentModel.find({docId})
        let earnings = 0
        appointments.map((item)=>{
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })

        let patients = []

        appointments.map((item)=>{
            if (!patients.includes(item.userId)) {
                patients.push(item.userId)
            }
        })

        const dashData = {
            earnings,
            appointments:appointments.length,
            patients: patients.length,
            latestAppointments : appointments.reverse().slice(0,5)
        }

        res.json({success:true,dashData})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const doctorProfile = async (req,res) => {
    try {

        const {docId} = req.body
        const profileData = await doctorModel.findById(docId).select('-password')

        res.json({success:true,profileData})     
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const updateProfile = async (req,res) => {
 
    try {

        const {docId,fees,addresss,available} = req.body

        await doctorModel.findByIdAndUpdate(docId,{fees,address,available}) 
        
        res.json({success:true, message:'Profile updated successfully'})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }

}

export {changeAvailability,doctorList,loginDoctor,
        appointmentsList, appointmentsCompleted, 
        appointmentsCancelled,doctorDashboard,doctorProfile,updateProfile}