"use client"
import { SessionProvider } from "next-auth/react"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


export default function SessionWrapper({ children }) {
    return (
        <SessionProvider>
            {children}
            <ToastContainer />
        </SessionProvider>
    )
}