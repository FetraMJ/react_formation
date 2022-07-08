import { Grid, Paper, Avatar, TextField } from '@mui/material';


export const Login = () => {

  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' }
  const avatarStyle = { backgroundColor: '#3daac7' }
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle} >
        <Grid align='center'>
          <Avatar style={avatarStyle}></Avatar>
          Login
        </Grid>
        <TextField label='Nom' placeholder='Entrez votre nom' fullWidth required />
        <TextField label='Mot de Passe' placeholder='Entrez votre mot de passe' type='password' fullWidth required />
      </Paper>
    </Grid>
  )
}