import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box, TextField, Typography, Alert, CircularProgress, InputAdornment, IconButton
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import ShieldIcon from '@mui/icons-material/Shield'
import { useAuth } from '../context/AuthContext'
import CyberButton from '../components/CyberButton'
import Footer from '../components/Footer'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (!username || !password) {
      setError('Ingresa usuario y contraseña.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Credenciales inválidas')
      login({ username, token: data.token })
      navigate('/')
    } catch (err) {
      if (username === 'admin' && password === 'admin') {
        login({ username, token: 'mock-token' })
        navigate('/')
      } else {
        setError('Credenciales inválidas. Usa admin / admin para demo.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      color: '#e0e7ff',
      fontFamily: '"Syne", sans-serif',
      '& fieldset': { borderColor: 'rgba(99,102,241,0.3)' },
      '&:hover fieldset': { borderColor: 'rgba(99,102,241,0.6)' },
      '&.Mui-focused fieldset': { borderColor: '#6366f1' },
    },
    '& .MuiInputLabel-root': { color: '#6b7280', fontFamily: '"Syne", sans-serif' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#818cf8' },
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' }}>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', px: 2 }}>
        <Box sx={{
          width: '100%', maxWidth: 420,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(99,102,241,0.2)',
          borderRadius: '4px',
          p: 5,
          boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.1)',
          backdropFilter: 'blur(20px)',
        }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <ShieldIcon sx={{ fontSize: 48, color: '#6366f1', mb: 1 }} />
            <Typography variant="h5" sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, color: '#e0e7ff', letterSpacing: 3 }}>
              MIAMI SECURITY
            </Typography>
            <Typography variant="caption" sx={{ color: '#6b7280', fontFamily: '"Syne", sans-serif', letterSpacing: 2 }}>
              ACCESO SEGURO
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 3, background: 'rgba(239,68,68,0.1)', color: '#fca5a5', border: '1px solid rgba(239,68,68,0.3)', '& .MuiAlert-icon': { color: '#f87171' } }}>
              {error}
            </Alert>
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField
              label="Usuario"
              value={username}
              onChange={e => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: '#6366f1', fontSize: 20 }} /></InputAdornment>
              }}
              sx={inputSx}
            />
            <TextField
              label="Contraseña"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start"><LockIcon sx={{ color: '#6366f1', fontSize: 20 }} /></InputAdornment>,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(v => !v)} edge="end" sx={{ color: '#6b7280' }}>
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={inputSx}
            />

            <CyberButton onClick={handleSubmit} disabled={loading} fullWidth sx={{ py: 1.5, mt: 1 }}>
              {loading ? <CircularProgress size={20} sx={{ color: '#e0e7ff' }} /> : 'Iniciar Sesión'}
            </CyberButton>
          </Box>

          <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 3, color: '#374151', fontFamily: '"Syne", sans-serif' }}>
            Acceso Degenado
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}