import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#6366f1' },
    background: { default: '#0f0c29', paper: 'rgba(255,255,255,0.03)' },
  },
  typography: { fontFamily: '"Syne", sans-serif' },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
