import React from 'react';
import Box from '@mui/material/Box';
import SlideShow from "./SlideShow";

export default function BoxSx() {
  return (
    <Box sx={{
        width:'100%',
        height: 3102,
        backgroundColor: 'gray',
        '&:hover': {
          backgroundColor: 'gray',
          opacity: [1],
        },
      }}
    >
      <SlideShow/>
    </Box>
  );
}