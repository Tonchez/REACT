import { Box, Typography } from '@mui/material'
import ShieldIcon from '@mui/icons-material/Shield'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        textAlign: 'center',
        background: 'rgba(15,12,41,0.8)',
        borderTop: '1px solid rgba(99,102,241,0.2)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 0.5 }}>
        <ShieldIcon sx={{ color: '#6366f1', fontSize: 18 }} />
        <Typography sx={{ color: '#6366f1', fontFamily: '"Syne", sans-serif', fontWeight: 800, letterSpacing: 2, fontSize: '0.85rem' }}>
          MIAMI SECURITY
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ color: '#4b5563', fontFamily: '"Syne", sans-serif', letterSpacing: 1 }}>
        © {new Date().getFullYear()} — Tec de Monterrey
      </Typography>
    </Box>
  )
}
