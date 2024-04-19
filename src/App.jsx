import { useEffect, useState } from 'react'
import { Navbar } from './components'
import { Home } from './pages'
import { SoundModal } from './components/SoundModal';
import { useTranslation } from 'react-i18next';

function App() {
  const [modal, setModal] = useState(true)
useEffect(() => {
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}
}, [])


  return (
    <div className='  overflow-hidden dark:bg-[#8958c7]'>
      {modal && <SoundModal setModal={setModal}/> }
    <Navbar/>
   <Home modal={modal}/>
    </div>
  )
}

export default App
