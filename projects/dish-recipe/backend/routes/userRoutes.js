import express from 'express'
import { authUser } from '../controllers/userController.js'
const router = express.Router()

// if only doing post request we can use router.post
router.post('/login', authUser)

export default router
