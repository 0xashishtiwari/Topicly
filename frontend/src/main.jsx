import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from '../src/store/index.js'
import { Provider } from 'react-redux'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>

        <App />

    </Provider>
  
)
