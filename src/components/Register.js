import React from 'react'
import './Styles.css'
import Navreg from './Forms/Navreg'
import { Outlet } from 'react-router-dom'
export default function Register() {
  return (
    <>
    <Navreg/>
    <Outlet/>
    </>
  )
}
