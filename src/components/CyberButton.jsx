import { Button } from '@mui/material'

export default function CyberButton({ children, variant = 'contained', color = 'primary', ...props }) {
  return (
    <Button
      variant={variant}
      {...props}
      sx={{
        fontFamily: '"Syne", sans-serif',
        fontWeight: 700,
        letterSpacing: 2,
        fontSize: '0.75rem',
        px: 3,
        py: 1,
        borderRadius: '2px',
        background: variant === 'contained' ? 'linear-gradient(135deg, #4f46e5, #7c3aed)' : 'transparent',
        border: variant === 'outlined' ? '1px solid #6366f1' : 'none',
        color: '#e0e7ff',
        boxShadow: variant === 'contained' ? '0 0 20px rgba(99,102,241,0.4)' : 'none',
        textTransform: 'uppercase',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0, left: '-100%',
          width: '100%', height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          transition: '0.4s',
        },
        '&:hover::before': { left: '100%' },
        '&:hover': {
          background: variant === 'contained' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(99,102,241,0.1)',
          boxShadow: '0 0 30px rgba(99,102,241,0.6)',
          transform: 'translateY(-1px)',
        },
        transition: 'all 0.2s ease',
        ...props.sx,
      }}
    >
      {children}
    </Button>
  )
}
