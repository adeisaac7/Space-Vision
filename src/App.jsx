import {useEffect, useState} from 'react'
import Footer from './Components/Footer'
import Main from  './Components/Main'
import SideBar from './Components/SideBar'
import gear from './Assets/gear.svg'


function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModule, setShowModule] = useState(false)

  function handleToggleModule(){
    setShowModule(! showModule)
  }

  useEffect(()=>{
    async function fetchAPIData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`


      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from Cache Today')
        return
      }
      localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API Today')
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
      {data ? (<Main data={data}/>): (
        <div className='loadingState'>
          <img src={gear} alt='' className='gear'/>
        </div>
      )}
      {showModule && (
        <SideBar data={data} handleToggleModule = {handleToggleModule}/>
      )}
      {data && (
        <Footer data={data} handleToggleModule = {handleToggleModule}/>
      )}
    </>
  )
}

export default App
