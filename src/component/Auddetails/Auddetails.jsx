import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
export default function Auddetails() {
  const [audio, setAudio] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  let { num, name } = useParams();
  async function getAudio() {
    return await axios
      .get(`https://api.alquran.cloud/v1/surah/${num}/ar.alafasy`)
      .then((data) => {
        console.log(data.data.data.ayahs ,"audio");
        setAudio(data.data.data.ayahs);
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
        {audio.map((ad) => (
          <div
            key={ad.number}
            className="relative my-4 w-full p-14 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700"
            dir="rtl"
          >
            <h4 className="text-gray-800 font-bold mb-3 dark:text-white text-2xl">
              {ad.text}
              <span className="ayah ms-4">{ad.numberInSurah}</span>
            </h4>
              <audio controls className="mt-12 w-[30%]"controlsList="nodownload noplaybackrate nomoreoptins">
              <source src={ad.audio} type="audio/ogg" />
              <source src={ad.audioSecondary} type="audio/ogg" />
            </audio>
            </div>
        ))}
       
      </div>
    </div>
  );
}

