import { AppBar, Toolbar, Typography, Button, Box, Chip } from '@mui/material'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import ShieldIcon from '@mui/icons-material/Shield'
import LogoutIcon from '@mui/icons-material/Logout'
import { useAuth } from '../context/AuthContext'

const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Contador', path: '/counter' },
  { label: 'Perfil', path: '/profile' },
]

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(135deg, #0f0c29, #302b63)', boxShadow: '0 2px 20px rgba(99,102,241,0.3)' }}>
      <Toolbar sx={{ gap: 1 }}>
        <ShieldIcon sx={{ color: '#818cf8', mr: 1 }} />
        <Typography variant="h6" sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, letterSpacing: 2, color: '#e0e7ff', flexGrow: 0, mr: 3 }}>
          CIBER
        </Typography>

        <Box sx={{ display: 'flex', gap: 0.5, flexGrow: 1 }}>
          {navLinks.map(link => (
            <Button
              key={link.path}
              component={Link}
              to={link.path}
              sx={{
                color: location.pathname === link.path ? '#818cf8' : '#a5b4fc',
                fontFamily: '"Syne", sans-serif',
                fontWeight: 600,
                fontSize: '0.8rem',
                letterSpacing: 1,
                borderBottom: location.pathname === link.path ? '2px solid #818cf8' : '2px solid transparent',
                borderRadius: 0,
                '&:hover': { color: '#e0e7ff', background: 'transparent' },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        <Chip
          label={user?.username}
          size="small"
          sx={{ background: 'rgba(99,102,241,0.2)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.4)', fontFamily: '"Syne", sans-serif', mr: 1 }}
        />
        <Button
          onClick={handleLogout}
          startIcon={<LogoutIcon />}
          size="small"
          sx={{ color: '#f87171', fontFamily: '"Syne", sans-serif', fontWeight: 700, letterSpacing: 1, '&:hover': { background: 'rgba(248,113,113,0.1)' } }}
        >
          Salir
        </Button>
      </Toolbar>
    </AppBar>
  )
}
