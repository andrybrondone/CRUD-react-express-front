import "@fontsource/inter"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "react-query"
import "react-toastify/dist/ReactToastify.css"
import App from './App.jsx'
import { ListLocationProvider } from "./api/ListLocationContext.jsx"
import { ConfirmProvider } from './context/ConfirmContext.jsx'
import { EditProvider } from "./context/EditContext.jsx"
import './index.css'
import { DarkModeProvider } from './ui/components/darkMode/DarkModeGlobal.jsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <ConfirmProvider>
          <ListLocationProvider>
            <EditProvider>
              <App />
            </EditProvider>
          </ListLocationProvider>
        </ConfirmProvider>
      </DarkModeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
