import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/private-theming";
import Theme from "../styled/Theme";
import SendIcon from '@mui/icons-material/Send';
import { formGroupClasses, Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import loginImg from '../images/login.jpg';
import FormGroup from "react-bootstrap/esm/FormCheckLabel";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import TermsBtn from './TermsBtn';
import { useState } from "react";
import Header from "./Header";




const LoginButton = () => {
    const [btn, setBtn] = useState(false)
  const { loginWithRedirect } = useAuth0();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const handleCheckbox = () => {
    setBtn(!btn)
  }

  const [member, setMember] = useState(true)

  return (
      <ThemeProvider theme={Theme}>
          <Header />
        <Box
            paddingY={4}
            height={1}
        >
            <Grid 
                container 
                spacing={4} 
                direction={isMd ? 'row' : 'column'}
                sx={{alignItems: 'center'}}
            >
                <Grid item xs={6}>
                    <Box 
                        component={'img'}
                        width={1}
                        height={1}
                        src={loginImg}
                    >

                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box 
                        paddingX={4}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                mb: 2,
                                fontFamily: 'Raleway',
                                color: '#021d25',
                                fontWeight: 'bolder'
                            }}
                            align={isMd? 'left': 'center'}
                        >
                            WELCOME BACK
                        </Typography>
                        <Typography 
                            variant="body1"
                            sx={{
                                mb: 2,
                                fontFamily: 'Montserrat'
                            }}
                            align={isMd? 'left': 'center'}
                        >
                            To keep connected with us, please login
                        </Typography>

                        {!member && (
                            <Box>
                                <Box marginY={4}>
                                    <FormGroup>
                                        <FormControlLabel onChange={handleCheckbox} control={<Checkbox />} label={<TermsBtn />} />
                                        
                                    </FormGroup>
                                </Box>

                                <Box
                                textAlign={isMd? 'left': 'center'}
                                >
                                <Button onClick={() => loginWithRedirect()}
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    size="large"
                                    disabled= { btn===false? true: false }
                                    sx={{ 
                                        backgroundColor: '#00db92', 
                                        width: '250px',
                                        fontFamily: 'Raleway',
                                    }}
                                    align={isMd? 'left': 'center'}
                                >
                                    LOGIN NOW
                                </Button>
                                </Box>
                            </Box>
                        )}
                        
                        {member && (
                            <Box
                            textAlign={isMd? 'left': 'center'}
                            >
                            <Button onClick={() => loginWithRedirect()}
                                variant="contained"
                                endIcon={<SendIcon />}
                                size="large"
                                // disabled= { btn===false? true: false }
                                sx={{ 
                                    backgroundColor: '#00db92', 
                                    width: '250px',
                                    fontFamily: 'Raleway',
                                }}
                                align={isMd? 'left': 'center'}
                            >
                                LOGIN NOW
                            </Button>
                            </Box>
                        )}
                        
                        
                    </Box>
                </Grid>
            </Grid>
        </Box>
      </ThemeProvider>
      
  )
};

export default LoginButton;