import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './global-style.tsx'
import { ThemeProvider } from './context/theme-context/theme-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
