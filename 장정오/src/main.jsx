import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <BrowserRouter>
      <React.StrictMode>
        <Root />
      </React.StrictMode>
    </BrowserRouter>
  </RecoilRoot>
)