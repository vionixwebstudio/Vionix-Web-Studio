import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/mona-sans/standard'
import 'lenis/dist/lenis.css'
import './styles.css'
import App from './App.jsx'

// The page opens at the top, so a reload never lands halfway through the pinned build.
if ('scrollRestoration' in history && !location.hash) history.scrollRestoration = 'manual'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
