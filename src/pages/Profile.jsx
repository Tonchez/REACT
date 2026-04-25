import { Box, Typography, Paper, Avatar, Divider, Chip } from '@mui/material'
import BadgeIcon from '@mui/icons-material/Badge'
import EmailIcon from '@mui/icons-material/Email'
import SchoolIcon from '@mui/icons-material/School'
import { useAuth } from '../context/AuthContext'
import Layout from '../components/Layout'

export default function Profile() {
  const { user } = useAuth()

  const fields = [
    { icon: <BadgeIcon sx={{ fontSize: 18 }} />, label: 'Usuario', value: user?.username },
    { icon: <EmailIcon sx={{ fontSize: 18 }} />, label: 'Correo', value: `${user?.username}@tec.mx` },
    { icon: <SchoolIcon sx={{ fontSize: 18 }} />, label: 'Institución', value: 'Tecnológico de Monterrey' },
  ]

  return (
    <Layout>
      <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h4" sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 900, color: '#e0e7ff', letterSpacing: 2, mb: 4 }}>
          PERFIL
        </Typography>

        <Paper sx={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(99,102,241,0.25)',
          borderRadius: '4px',
          p: 4,
          backdropFilter: 'blur(10px)',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
            <Avatar sx={{ width: 72, height: 72, background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', fontSize: '2rem', fontFamily: '"Syne", sans-serif', fontWeight: 900 }}>
              {user?.username?.[0]?.toUpperCase()}
            </Avatar>
            <Box>
              <Typography sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, color: '#e0e7ff', fontSize: '1.4rem' }}>
                {user?.username}
              </Typography>
              <Chip label="Activo" size="small" sx={{ background: 'rgba(74,222,128,0.15)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.3)', fontFamily: '"Syne", sans-serif', fontSize: '0.7rem', mt: 0.5 }} />
            </Box>
          </Box>

          <Divider sx={{ borderColor: 'rgba(99,102,241,0.15)', mb: 3 }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            {fields.map(field => (
              <Box key={field.label} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ color: '#6366f1', minWidth: 24 }}>{field.icon}</Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#4b5563', fontFamily: '"Syne", sans-serif', letterSpacing: 1, display: 'block' }}>
                    {field.label}
                  </Typography>
                  <Typography sx={{ color: '#c7d2fe', fontFamily: '"Syne", sans-serif', fontWeight: 600 }}>
                    {field.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </Layout>
  )
}
