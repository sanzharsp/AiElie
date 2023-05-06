


import React, { useEffect, useState } from 'react'
import Main from './main'
import './styles.css'
import Anim2 from '../anim/Animations'


export default function About_diploms() {
  const [open,setOpen] = useState(true);
  
  useEffect(()=>{
    setTimeout(()=>setOpen(!open), 8000);
  },[])
  return (
   <>
  {
    open?
    <Anim2/>
    :
    <Main/>
  }
    </>
  )
}
