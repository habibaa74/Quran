import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
export default function AsmaaAlhusna() {
  const [asmaa, setAsmaa] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  async function getAsmaa(){
  return await axios.get("https://api.aladhan.com/v1/asmaAlHusna").then((data)=>{
setAsmaa(data.data.data)
setIsLoading(false)
  }).catch((err)=>{
  console.log(err);
  setIsLoading(false)
  })
  }
  useEffect(()=>{
    getAsmaa()
  },[])
  return (
    <div className='container mx-auto my-5'>
      <h1 className='mb-5 text-center dark:text-slate-50 text-slate-900 text-4xl family'>أسماء الله الحسنى </h1>
      <div className="relative">
    {isLoading ?<Loader/> :""}
    </div>
      <div dir='rtl' className="flex justify-between items-center flex-wrap">
        {asmaa.map((word)=><div key={word.number} lang='ar' className="style w-1/6 dark:text-slate-50 text-slate-900 text-center">{word.name}</div>)}
      </div>
    </div>
  )
}
