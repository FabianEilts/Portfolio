import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Sections from './Sections.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Sections />
  </React.StrictMode>,
)
