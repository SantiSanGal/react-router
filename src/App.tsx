import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { useState } from 'react';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <>
      <h1>Santi Router</h1>
      {currentPath === '/' && < HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </>
  )
}

export default App
