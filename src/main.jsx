import "@fontsource/inter"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ListLocationProvider } from "./api/ListLocationContext.jsx"
import { ConfirmProvider } from './context/ConfirmContext.jsx'
import { EditProvider } from "./context/EditContext.jsx"
import { StatProvider } from "./context/StatContext.jsx"
import './index.css'
import { DarkModeProvider } from './ui/components/darkMode/DarkModeGlobal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <ConfirmProvider>
        <ListLocationProvider>
          <EditProvider>
            <StatProvider>
              <App />
            </StatProvider>
          </EditProvider>
        </ListLocationProvider>
      </ConfirmProvider>
    </DarkModeProvider>
  </React.StrictMode>,
)
