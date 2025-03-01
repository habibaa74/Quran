import React from 'react'
import { Link } from 'react-router-dom'
<link href="https://fonts.googleapis.com/css2?family=Rakkas&display=swap" rel="stylesheet"/>
export default function Home() {
  return (
    <div className='home'>
      <div className="p-9 absolute lg:top-[30%] md:top-[15%] md:w-[60%]">
      <p className='text-center text-white text-4xl' style={{fontFamily:"Rakkas"}}>يقولُ اللَّهُ تَعالَى: أنا عِنْدَ ظَنِّ عَبْدِي بي، وأنا معهُ إذا ذَكَرَنِي، فإنْ ذَكَرَنِي في نَفْسِهِ ذَكَرْتُهُ في نَفْسِي، وإنْ ذَكَرَنِي في مَلَإٍ ذَكَرْتُهُ في مَلَإٍ خَيْرٍ منهمْ، وإنْ تَقَرَّبَ إلَيَّ بشِبْرٍ تَقَرَّبْتُ إلَيْهِ ذِراعًا، وإنْ تَقَرَّبَ إلَيَّ ذِراعًا تَقَرَّبْتُ إلَيْهِ باعًا، وإنْ أتانِي يَمْشِي أتَيْتُهُ هَرْوَلَةً.</p>
     <Link to="/quran">
      <button type="button" className=" my-8 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Keep Allah Close To Your Heart<i className="fa-solid fa-arrow-right ml-2"></i></button>
     </Link>
      </div>
    </div>  
  )
}
