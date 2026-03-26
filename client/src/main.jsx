import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { SocketProvider } from './contexts/SocketProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <SocketProvider>
  <ToastContainer/>
    <App />
    </SocketProvider>
  </StrictMode>,
)
