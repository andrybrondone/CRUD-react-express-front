import "@fontsource/inter"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ListLocationProvider } from "./api/ListLocationContext.jsx"
import './index.css'
import { DarkModeProvider } from './ui/components/darkMode/DarkModeGlobal.jsx'
import { ConfirmProvider } from './ui/components/modale/ConfirmContext.jsx'
import { EditProvider } from "./ui/components/modale/EditContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <ConfirmProvider>
        <ListLocationProvider>
          <EditProvider>
            <App />
          </EditProvider>
        </ListLocationProvider>
      </ConfirmProvider>
    </DarkModeProvider>
  </React.StrictMode>,
)
