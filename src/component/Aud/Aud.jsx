import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Aud() {
  const [Name, setName] = useState([])
  async function getNames() {
    return await axios
      .get("http://api.alquran.cloud/v1/meta")
      .then((data) => {
        console.log(data.data.data.surahs.references);
        setName(data.data.data.surahs.references)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getNames();
  }, []);
  return <div className="flex flex-wrap justify-center items-center my-5 gap-8"dir="rtl" >
{Name.map((surah)=><Link to={`/AudDetails/${surah.number}/${surah.name}`} key={surah.number} className="Data py-6 pl-6 ps-2 border-2 text-gray-600 border-gray-700 sm:w-full md:w-1/3 lg:w-1/4 hover:text-blue-500 hover:border-blue-500">
<div className="flex items-center">
<i className="fa-solid fa-diamond text-5xl relative"><span className='text-white text-lg font-normal absolute num'>{surah.number}</span></i>
<p className='ms-2 text-2xl font-semibold text-blue-700'>{surah.name}</p>
</div>
<div className="flex items-center justify-between">
<p className='font-bold'>Num of Aayahs: <span className='font-semibold text-blue-700'>{surah.numberOfAyahs}</span> </p>
<p className='ms-2 font-bold'>{surah.revelationType}</p>
</div>
</Link>)}
  </div>;
}
