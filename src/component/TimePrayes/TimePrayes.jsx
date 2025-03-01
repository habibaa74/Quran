import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
export default function TimePrayes() {
  const [Time, setTime] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  let params={
    country:"eg",
    city:"Al Gharbīyah"
  }
  async function getTime(){
    return await axios.get("http://api.aladhan.com/v1/calendarByCity",{params}).then((data)=>{
      setTime(data.data.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err);  
      setIsLoading(false)
    })
  }useEffect(()=>{
    getTime()
  },[])

  return (
<div className='container mx-auto my-5'>
<div className="relative overflow-x-auto">
  <h1 className='mb-5 text-white font-semibold text-4xl'>Prayer Times For Al Gharbīyah</h1>
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Date
        </th>
        <th scope="col" className="px-6 py-3">
          Day
        </th>
        <th scope="col" className="px-6 py-3">
          Imsak
        </th>
        <th scope="col" className="px-6 py-3">
          Fajr
        </th>
        <th scope="col" className="px-6 py-3">
        Sunrise
        </th>
        <th scope="col" className="px-6 py-3">
        Dhuhr
        </th>
        <th scope="col" className="px-6 py-3">
        Asr
        </th>
        <th scope="col" className="px-6 py-3">
        Sunset
        </th>
        <th scope="col" className="px-6 py-3">
        Maghrib
        </th>
        <th scope="col" className="px-6 py-3">
        Isha
        </th>
        <th scope="col" className="px-6 py-3">
        Firstthird
        </th>
        <th scope="col" className="px-6 py-3">
        Lastthird
        </th>
      </tr>
    </thead>
    <tbody>
    <div className='absolute left-[50%]'>
    {isLoading ? <Loader/> :""}
    </div>
    {Time.map((DayTime)=><tr key={DayTime.date.timestamp} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
       {DayTime.date.hijri.date}
      </td>
      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
      {DayTime.date.gregorian.weekday.en}
      </td>
      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white text-center'>
        {DayTime.timings.Imsak.split(" ")[0]}
      </td>
      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white text-center'>
      {DayTime.timings.Fajr.split(" ")[0]}
      </td>
      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white text-center'>
      {DayTime.timings.Sunrise.split(" ")[0]}
      </td>
      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white text-center'>
      {DayTime.timings.Dhuhr.split(" ")[0]}
      </td>
      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white text-center'>
      {DayTime.timings.Asr.split(" ")[0]}
      </td>
      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white text-center'>
      {DayTime.timings.Sunset.split(" ")[0]}

      </td>
      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white text-center'>
      {DayTime.timings.Maghrib.split(" ")[0]}

      </td>
      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white text-center'>
      {DayTime.timings.Isha.split(" ")[0]}

      </td>
      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white text-center'>
      {DayTime.timings.Firstthird.split(" ")[0]}

      </td>
      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white text-center'>
      {DayTime.timings.Lastthird.split(" ")[0]}

      </td>
    </tr>)}
    </tbody>
  </table>
</div>
    </div>
  )
}
