import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
export default function Surah() {
  const [Arabic, setArabic] = useState([]);
  const [English, setEnglish] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  let { num, name } = useParams();
  async function getAudio() {
    return await axios
      .get(`http://api.alquran.cloud/v1/surah/${num}/editions/quran-uthmani,en.asad`)
      .then((data) => {
        console.log(data.data.data[1]);
        setArabic(data.data.data[0]);
        setEnglish(data.data.data[1]);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }
  useEffect(() => {
    getAudio();
  }, []);
  return (     
    <div>
      <div className="container mx-auto">
        <h1 className="text-white text-center my-10 text-4xl">{name}</h1>
        {isloading ? <Loader/> : ""}
      {Arabic.ayahs?.map((ayah)=><div
            key={ayah.number}
            className="relative my-4 w-full p-14 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            dir="rtl"
          >
            <h4 className="text-gray-800 font-bold mb-3 dark:text-white text-2xl border-b pb-3">
              {ayah.text}
              <span className="ayah ms-4">{ayah.numberInSurah}</span>
            </h4>
            <h4>
            {English.ayahs?.map((en)=><div dir="ltr">
               {ayah.numberInSurah === en.numberInSurah ?<h4 className="text-gray-800 font-bold mb-3 dark:text-white text-2xl">
              {en.text}
            </h4> : null }
            </div>
            )}
            </h4>
            </div>)}
      </div>
    </div>
  );
}

