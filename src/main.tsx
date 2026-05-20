import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Puppies from './catergories.tsx'
import Gallery from './gallery.tsx'
import PetSections from './petSection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Puppies />
    <Gallery />
    <PetSections />

  </StrictMode>,
)
