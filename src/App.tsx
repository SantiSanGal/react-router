import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { useEffect, useState } from 'react';

// nombre del nuevo evento
const NAVIGATION_EVENT = 'pushstate'

export function navigate(href) {
  window.history.pushState({}, '', href) // agrega al historial una nueva url
  const navigationEvent = new Event(NAVIGATION_EVENT) //crea el nuevo evento
  window.dispatchEvent(navigationEvent) //lanza el nuevo evento
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      //cuando se lanza el nuevo evento setea el estado de la url
      setCurrentPath(window.location.pathname)
    }

    //pone a escuchar el nuevo evento
    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      //se limpian las referencias
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }

  }, [])


  return (
    <>
      <h1>Santi Router</h1>
      {currentPath === '/' && < HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </>
  )
}

export default App
