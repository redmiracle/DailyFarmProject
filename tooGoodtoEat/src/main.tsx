import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import {registerSW} from 'virtual:pwa-register';
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
registerSW({immediate: true});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>  
  </StrictMode>,
)
