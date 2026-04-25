import { useState } from 'react'
import { Box, Typography, Paper, Divider, Chip } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import SecurityIcon from '@mui/icons-material/Security'
import { useAuth } from '../context/AuthContext'
import CyberButton from '../components/CyberButton'
import Layout from '../components/Layout'

const tips = [
  'Usa contraseñas de al menos 16 caracteres con símbolos y números.',
  'Activa la autenticación de dos factores en todas tus cuentas.',
  'Nunca reutilices contraseñas en diferentes servicios.',
  'Verifica siempre la URL antes de ingresar credenciales.',
  'Mantén tu software actualizado para cerrar vulnerabilidades.',
  'Desconfía de correos que piden datos urgentes: son phishing.',
]

export default function Home() {
  const { user } = useAuth()
  const [tipIndex, setTipIndex] = useState(0)

  const nextTip = () => setTipIndex(i => (i + 1) % tips.length)

  return (
    <Layout>
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h3" sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 900, color: '#e0e7ff', letterSpacing: 2, lineHeight: 1.1 }}>
            Bienvenido,
          </Typography>
          <Typography variant="h3" sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 900, color: '#818cf8', letterSpacing: 2 }}>
            {user?.username}
          </Typography>
          <Typography sx={{ color: '#6b7280', mt: 1, fontFamily: '"Syne", sans-serif', letterSpacing: 1 }}>
            Panel de concienciación en ciberseguridad
          </Typography>
        </Box>

        <Paper sx={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(99,102,241,0.25)',
          borderRadius: '4px',
          p: 4,
          backdropFilter: 'blur(10px)',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
            <SecurityIcon sx={{ color: '#6366f1' }} />
            <Typography sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 700, color: '#a5b4fc', letterSpacing: 2, fontSize: '0.8rem' }}>
              CONSEJO DE SEGURIDAD
            </Typography>
            <Chip label={`${tipIndex + 1}/${tips.length}`} size="small" sx={{ ml: 'auto', background: 'rgba(99,102,241,0.15)', color: '#818cf8', fontFamily: '"Syne", sans-serif', fontSize: '0.7rem' }} />
          </Box>

          <Divider sx={{ borderColor: 'rgba(99,102,241,0.15)', mb: 3 }} />

          <Typography sx={{ color: '#c7d2fe', fontFamily: '"Syne", sans-serif', fontSize: '1.1rem', lineHeight: 1.8, minHeight: 60, fontWeight: 500 }}>
            {tips[tipIndex]}
          </Typography>

          <Box sx={{ mt: 3 }}>
            <CyberButton onClick={nextTip} startIcon={<RefreshIcon />}>
              Siguiente consejo
            </CyberButton>
          </Box>
        </Paper>
      </Box>
    </Layout>
  )
}
