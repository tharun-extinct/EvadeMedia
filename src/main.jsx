import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Components/Header/Header'
import './index.css'

const rootId = document.getElementById('root');
ReactDOM.createRoot(rootId).render(
  <React.StrictMode>
    <App/>
    <Header/>
  </React.StrictMode>,
)
