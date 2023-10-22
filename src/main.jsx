import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Sections from './Sections.jsx'
import SocialMedia from './SocialMedia.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Sections />
    <SocialMedia />
  </React.StrictMode>,
)
