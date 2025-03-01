import React from 'react'
import { ClockLoader } from 'react-spinners'
export default function Loader() {
  return (
    <div className='container flex justify-center items-center'>
       <div>
     <ClockLoader />
     </div>
    </div>
  )
}
