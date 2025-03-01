import "../node_modules/flowbite/dist/flowbite"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout/Layout'
import Quran from './component/Quran/Quran'
import AsmaaAlhusna from './component/AsmaaAlhusna/AsmaaAlhusna'
import TimePrayes from './component/TimePrayes/TimePrayes'
import Home from "./component/Home/Home"
import Surah from "./component/Surah/Surah"
import Aud from "./component/Aud/Aud"
import Auddetails from "./component/Auddetails/Auddetails"
<link href="https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"/>

function App() {
let routes = createBrowserRouter([{
  path:"/",element:<Layout/>,children:[{
    path:"/",element:<Home/>
  },{
    path:"quran",element:<Quran/>
  },{
    path:"timeprayes",element:<TimePrayes/>
  },{
    path:"asmaaalhusna",element:<AsmaaAlhusna/>
  },{
    path:"Surah/:num/:name",element:<Surah/>
  },{path:"quranAudio",element:<Aud/>},{
    path:"Auddetails/:num/:name",element:<Auddetails/>
  }]
}])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
