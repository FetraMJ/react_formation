import Box from '@mui/material/Box';
const ItemMiniBar = (props) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 0.3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#161b1d',
        fontSize: '0.4rem',
        ...sx,
      }}
      {...other}
    />
  );
};

export default ItemMiniBar;