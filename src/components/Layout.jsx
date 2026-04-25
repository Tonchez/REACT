import { Box } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, pt: '80px', px: { xs: 2, md: 4 }, py: 4 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
