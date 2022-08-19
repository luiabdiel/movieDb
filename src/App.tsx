import { useState } from 'react'
import './App.scss'
import { Cards } from './components/Cards'
import { Header } from './components/Header'

function App() {

  return (
    <div>
    <div className='div-fantasma'></div>
    <Header/>
    <div className="card-container">
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    </div>
    </div>
  )
}

export default App
