import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { Router } from './Router';
import { Page404 } from './pages/error/404';

// nombre del nuevo evento
// const NAVIGATION_EVENT = 'pushstate'

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

function App() {
  return (
    <main>
      {/* <h1>Santi Router</h1> */}
      {/* {currentPath === '/' && < HomePage />}
      {currentPath === '/about' && <AboutPage />} */}
      <Router routes={routes} defaultComponent={Page404} />
    </main>
  )
}

export default App