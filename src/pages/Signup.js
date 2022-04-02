import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../styled/Theme';

const Signup = () => {
  return (
    <ThemeProvider theme={Theme}>
        <Box
          sx={{
            backgroundColor: "primary",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
          }}
        >
          <Container>
            <Typography variant="h4">
              Compute
            </Typography>
          </Container>
        </Box>
    </ThemeProvider>
  )
}

export default Signup;