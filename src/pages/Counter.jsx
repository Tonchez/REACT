import { Box, Typography, Paper, Divider } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { useCounter } from '../hooks/useCounter'
import CyberButton from '../components/CyberButton'
import Layout from '../components/Layout'

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(0)

  const getColor = () => {
    if (count > 0) return '#4ade80'
    if (count < 0) return '#f87171'
    return '#818cf8'
  }

  return (
    <Layout>
      <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h4" sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 900, color: '#e0e7ff', letterSpacing: 2, mb: 1 }}>
          CONTADOR
        </Typography>
        <Typography sx={{ color: '#6b7280', fontFamily: '"Syne", sans-serif', letterSpacing: 1, mb: 4 }}>
          Hook personalizado
        </Typography>

        <Paper sx={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(99,102,241,0.25)',
          borderRadius: '4px',
          p: 5,
          textAlign: 'center',
          backdropFilter: 'blur(10px)',
        }}>
          <Typography variant="caption" sx={{ fontFamily: '"Syne", sans-serif', letterSpacing: 3, color: '#4b5563', display: 'block', mb: 1 }}>
            VALOR ACTUAL
          </Typography>

          <Typography sx={{
            fontFamily: '"Syne", sans-serif',
            fontWeight: 900,
            fontSize: '6rem',
            lineHeight: 1,
            color: getColor(),
            transition: 'color 0.3s ease',
            textShadow: `0 0 40px ${getColor()}55`,
            mb: 1,
          }}>
            {count}
          </Typography>

          <Typography sx={{ fontFamily: '"Syne", sans-serif', color: '#4b5563', fontSize: '0.75rem', letterSpacing: 2, mb: 4 }}>
            {count > 0 ? 'POSITIVO' : count < 0 ? 'NEGATIVO' : 'NEUTRO'}
          </Typography>

          <Divider sx={{ borderColor: 'rgba(99,102,241,0.15)', mb: 4 }} />

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CyberButton onClick={decrement} startIcon={<RemoveIcon />} variant="outlined">
              Menos
            </CyberButton>
            <CyberButton onClick={increment} startIcon={<AddIcon />}>
              Más
            </CyberButton>
            <CyberButton onClick={reset} startIcon={<RestartAltIcon />} variant="outlined" sx={{ borderColor: 'rgba(248,113,113,0.4)', color: '#f87171', '&:hover': { borderColor: '#f87171', background: 'rgba(248,113,113,0.08)' } }}>
              Rest
            </CyberButton>
          </Box>
        </Paper>
      </Box>
    </Layout>
  )
}
