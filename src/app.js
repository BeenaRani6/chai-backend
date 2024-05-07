import express from "express";
import cors from "cors"
import CookieParser from "cookieparser";



const app = express()

app.use(cors({   // app.use is used when we have to do configuration or to set middleware
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended, limit:"16kb"}))
app.use(express.static("public"))
app.use(CookieParser())

export { app } 