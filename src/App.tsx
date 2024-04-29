import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { useEffect, useState } from 'react';
import { EVENTS } from './interfaces/consts';

// nombre del nuevo evento
// const NAVIGATION_EVENT = 'pushstate'
type Route = {
  path: string;
  Component: React.ComponentType<any>;
}

type RouterProps = {
  routes: Route[];
  defaultComponent?: React.ComponentType<any>
}

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  }
]

function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }: RouterProps) {
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

  const Page = routes.find(({ path }) => path === currentPath)?.Component
  return Page ? <Page /> : <DefaultComponent />
}

function App() {

  return (
    <main>
      <h1>Santi Router</h1>
      {/* {currentPath === '/' && < HomePage />}
      {currentPath === '/about' && <AboutPage />} */}
      <Router routes={routes} />
    </main>
  )
}

export default App
