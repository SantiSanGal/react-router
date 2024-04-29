import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { useEffect, useState } from 'react';
import { EVENTS } from './interfaces/consts';

// nombre del nuevo evento
// const NAVIGATION_EVENT = 'pushstate'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      //cuando se lanza el nuevo evento setea el estado de la url
      setCurrentPath(window.location.pathname)
    }

    //pone a escuchar el nuevo evento
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      //se limpian las referencias
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
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
