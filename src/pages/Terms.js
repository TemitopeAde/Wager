import { Box, Container, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider } from "@mui/private-theming";
import Theme from "../styled/Theme";
import { terms_detail } from '../Data/Home/Terms';
import Header from '../component/Header';
import SendIcon from '@mui/icons-material/Send';


const Terms = () => {
    const { header, time_updated, paragraph } = terms_detail
    
  return (
    <ThemeProvider theme={Theme}>
        <Header />
        <Box
            marginY={12}
        >   
            <Container>
                <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h4">{header}</Typography>
                <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bold'}} variant ="subtitle">{time_updated}</Typography>

                <Box
                    sx={{
                        marginTop: "30px"
                    }}
                >
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[0].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[0].text1}</Typography>
                        <Typography variant="body1">{paragraph[0].text2}</Typography>
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[1].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[1].text1}</Typography>
                        <Typography variant="body1">{paragraph[1].text2}</Typography>
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[2].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[2].text1}</Typography>
                    </Box>
                    <Box marginY={4}>
                
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} marginY={2} variant="h6">{paragraph[3].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[3].payIntro}</Typography>

                        {
                            paragraph[3].payment.map((item,index) => (
                                <List key={index} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <SendIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItemButton>
                                    
                                </List>
                            ))
                        }


                        <Typography marginY={2} variant="body1">{paragraph[3].text1}</Typography>
                        <Typography variant="body1">{paragraph[3].text2}</Typography>
                    </Box>

                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[4].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[4].text1}</Typography>
                        <Typography variant="body1">{paragraph[4].text2}</Typography>
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[5].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[5].text1}</Typography>
                        <Typography variant="body1">{paragraph[5].text2}</Typography>
                        {
                            paragraph[5].agree.map((item, index) => (
                                <List key={index} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <SendIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItemButton>
                                    
                                </List>
                            ))
                        }
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[6].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[6].text1}</Typography>
                        
                        {
                            paragraph[6].agreement.map((item, index) => (
                                <List key={index} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <SendIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItemButton>
                                    
                                </List>
                            ))
                        }
                        <Typography variant="body1">{paragraph[6].text2}</Typography>
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[7].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[7].text1}</Typography>
                        <Typography marginY={1} variant="body1">{paragraph[7].text2}</Typography>
                        <Typography marginY={1} variant="body1">{paragraph[7].text3}</Typography>
                        <Typography variant="body1">{paragraph[7].text4}</Typography>
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} marginY={2} variant="h6">{paragraph[8].subheading}</Typography>
                        {
                            paragraph[8].section.map((item,index) => (
                                <Box marginY={4} key={index}>
                                    <Typography variant="h6">{item.text1}</Typography>
                                    <Typography variant="body1">{item.text2}</Typography>
                                </Box>
                            ))
                        }
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[9].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[9].text1}</Typography>
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[10].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[10].text1}</Typography>
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[11].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[11].text1}</Typography>
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[12].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[12].text1}</Typography>
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[13].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[13].text1}</Typography>
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[14].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[14].text1}</Typography>
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[15].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[15].text1}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[15].text2}</Typography>
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[16].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[16].text1}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[16].text2}</Typography>
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[17].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[17].text1}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[17].text2}</Typography>
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[18].subheading}</Typography>
                        {
                            paragraph[18].sections.map((item,index) => (
                                <Box marginY={2}>
                                    <Typography marginY={2} variant="body1">{item.title}</Typography>
                                    <Typography marginY={2} variant="body1">{item.text1}</Typography>
                                </Box>
                            ))
                        }
                        
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[19].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[19].text1}</Typography>
                        
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[20].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[20].text1}</Typography>
                        
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[21].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[21].text1}</Typography>
                        
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[22].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[22].text1}</Typography>
                        
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[23].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[23].text1}</Typography>
                        
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[24].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[24].text1}</Typography>
                        
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[25].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[25].text1}</Typography>
                        
                    </Box>
                    <Box marginY={4}>
                        <Typography sx={{fontFamily: 'Raleway', color: '#021d25', fontWeight: 'bolder'}} variant="h6">{paragraph[26].subheading}</Typography>
                        <Typography marginY={2} variant="body1">{paragraph[26].text1}</Typography>
                        
                    </Box>
                </Box>
            </Container>
            
        </Box>
    </ThemeProvider>
    
  )
}

export default Terms