import { styled } from '@mui/material/styles';
import { Box,Stack,Button } from '@mui/material';
import esokia_logo from './image/esokia_logo.png';
import chien_img from './image/chien_img.png';


const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = {
    text_initial: {
      textTransform: 'initial',
      fontFamily:'Comic Sans MS',
      color: 'white',
      ':hover': {
        bgcolor: '#3daac7',
        
      },
    },
    text_title: {
      backgroundColor: 'transparent', 
      color: 'white',
      fontStyle: 'italic',
      fontSize: '80px',
      fontFamily: 'Roboto',
      
      
    },
    text_content: {
      marginTop: -70,
      fontSize: '2 rem',
      color: 'white',
      backgroundColor: 'white'
      
    },
  };

export const SlideShow = () => {
  return (
    <Box
      sx={{
        height: '692px' , 
        backgroundImage : `url(${process.env.PUBLIC_URL + chien_img})`,
      }}>
      <Stack spacing={0}>
            <Stack direction="column" spacing={10} marginTop='40px'>
                <Stack direction="row" spacing={1} >
                  <Box width={'190px'} />
                      <img
                        src={process.env.PUBLIC_URL + esokia_logo}
                        alt="esokia_logo"
                        className={{ width: "131px", height: "45px" }}
                      />
                  <Box width='172px' />
                  <Button
                    //onClick={() => window.alert('Esokia')}
                    color="inherit"
                    sx={useStyles.text_initial}
                  >
                    Esokia
                  </Button>
                  <Button color="inherit" sx={useStyles.text_initial}>
                    Services
                  </Button>
                  <Button color="inherit" sx={useStyles.text_initial}>
                    Références
                  </Button>
                  <Button color="inherit" sx={useStyles.text_initial}>
                    Carrières
                  </Button>
                  <Button color="inherit" sx={useStyles.text_initial}>
                    Actualités
                  </Button>
                  <Button color="inherit" sx={useStyles.text_initial}>
                    Devis
                  </Button>
                  <Button color="inherit" sx={useStyles.text_initial}>
                    Contact
                  </Button>
                </Stack>
            </Stack>
      </Stack>
    </Box>
  );
}