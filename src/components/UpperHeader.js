import React from 'react'
import {Box,AppBar,Stack,Button,Divider } from '@mui/material'
import { PhoneAndroid } from '@mui/icons-material';

export const UpperHeader = () => {
  
  return (  <Box 
               sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end"
    
                  }}>
              <AppBar position='static' style={{backgroundColor: '#161b1d',height:'32px'}}  
                         >
                      <Stack direction='row' spacing={1} height='32px' justifyContent='flex-end'>
                        <Divider
                                orientation="vertical"
                                sx={{ backgroundColor: 'gray' }}
                                flexItem
                        />
                          <Button variant='text' color='inherit'
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                  }}
                          >
                            <PhoneAndroid style={{ height: '13px',alignItems:'center' }} />
                              <span style={{ fontSize: '11px',}}>
                                +230 52 93 51 11
                              </span>
                          </Button>
                        <Divider
                                orientation="vertical"
                                sx={{ backgroundColor: 'gray' }}
                                flexItem
                        />
                          <Button variant='text' color='inherit'
                                  style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          flexWrap: 'wrap',
                                        }}
                          >
                              <span style={{ fontSize: '11px', textTransform: 'none' }}>
                                Login
                              </span>
                          </Button>
                        <Divider
                                orientation="vertical"
                                sx={{ backgroundColor: 'gray' }}
                                flexItem
                        />
                          <Button variant='text' color='inherit'
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                  }}
                          >
                            <span style={{ fontSize: '11px', textTransform: 'none'}}>
                              Register
                            </span>
                          </Button>
                        <Divider
                                orientation="vertical"
                                sx={{ backgroundColor: 'gray' }}
                                flexItem
                        />
                        <Box width='235px' />
                      </Stack>
                  
              </AppBar>
            </Box >
  )
}
