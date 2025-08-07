import express from 'express'
import { appointmentsList, doctorList, loginDoctor,appointmentsCancelled,appointmentsCompleted,doctorDashboard,doctorProfile,updateProfile} from '../controllers/doctorController.js'
import authDoctor from '../middleware/authDoctor.js'

const doctorRouter=express.Router()

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,appointmentsList)
doctorRouter.post('/complete-appointment',authDoctor,appointmentsCompleted)
doctorRouter.post('/cancel-appointment',authDoctor,appointmentsCancelled)
doctorRouter.get('/dashboard',authDoctor,doctorDashboard)
doctorRouter.get('/profile',authDoctor,doctorProfile)
doctorRouter.post('/update-profile',authDoctor,updateProfile)

export default doctorRouter
