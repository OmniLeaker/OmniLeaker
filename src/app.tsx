import React from 'react'
import Footer from './components/footer/footer.jsx'
import Header from './components/header/header.jsx'
import './app.css'
import { useHelia } from './hooks/use-helia.js'
import { Page } from './page/page.jsx'

export const App_z = (): React.JSX.Element => {
  const { starting, error } = useHelia()

  
  const ready_z = !starting || error

  return (
    <div className='App sans-serif'>
      <div className='flex flex-column min-vh-100'>
        <Header />
        <main className='flex-auto ph4'>
          { ready && <Page /> }
        </main>
        <Footer />
      </div>
    </div>
  )
}
