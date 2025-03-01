import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Quran() {
  const [Quran, setQuran] = useState([])
  async function getNames(){
    return await axios.get("http://api.alquran.cloud/v1/meta").then((data)=>{
      setQuran(data.data.data)
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    getNames()
 },[])
  return (
    <div className='p-5'>
    <h1 className='text-blue-700 font-bold text-3xl my-2 font-serif'>Information About Quran:</h1>
    <h2 className='text-gray-500 font-bold text-2xl'>Total Ayahs: <span className='text-blue-600'>{Quran.ayahs?.count}</span></h2>
    <h2 className='text-gray-500 font-bold text-2xl'>Total HizbQuarters: <span className='text-blue-600'>{Quran.hizbQuarters?.count}</span></h2>
    <h2 className='text-gray-500 font-bold text-2xl'>Total juzs: <span className='text-blue-600'>{Quran.juzs?.count}</span></h2>
    <h2 className='text-gray-500 font-bold text-2xl'>Total Pages: <span className='text-blue-600'>{Quran.pages?.count}</span></h2>
    <h2 className='text-gray-500 font-bold text-2xl'>Total Sajdas: <span className='text-blue-600'>{Quran.sajdas?.count}</span></h2>
    <h2 className='text-gray-500 font-bold text-2xl'>Total Surahs: <span className='text-blue-600'>{Quran.surahs?.count}</span></h2>
    <h2 className='text-center text-4xl font-bold my-3 text-blue-600 font-serif'>Names Of Surahs</h2>
    <div className='flex flex-wrap justify-center items-center my-5 gap-8' dir='rtl'>
{Quran.surahs?.references?.map((surah)=><Link to={`/Surah/${surah.number}/${surah.name}`} key={surah.number} className="Data py-6 pl-6 ps-2 border-2 text-gray-600 border-gray-700 sm:w-full md:w-1/3 lg:w-1/4 hover:text-blue-500 hover:border-blue-500">
<div className="flex items-center">
<i className="fa-solid fa-diamond text-5xl relative"><span className='text-white text-lg font-normal absolute num'>{surah.number}</span></i>
<p className='ms-2 text-2xl font-semibold text-blue-700'>{surah.name}</p>
</div>
<div className="flex items-center justify-between">
<p className='font-bold'>Num of Aayahs: <span className='font-semibold text-blue-700'>{surah.numberOfAyahs}</span> </p>
<p className='ms-2 font-bold'>{surah.revelationType}</p>
</div>
</Link>)}
    </div>
    </div>
  )
}


