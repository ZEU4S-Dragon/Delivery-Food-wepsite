import express from "express"
import { loginUser,registarUser } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/registar",registarUser)
userRouter.post("/login",loginUser)

export default userRouter;  