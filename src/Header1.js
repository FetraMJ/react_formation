import { Stack, Divider } from '@mui/material';
import { PhoneAndroid } from '@mui/icons-material';
import Box from '@mui/material/Box';
import ItemMiniBar from './ItemMiniBar';
const MiniBar = (props) => {
  const { sx } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#161b1d',
        width: '100%',
        height:41,
        paddingRight:0,
      }}
    >
      <Stack direction="row" spacing={1}>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: 'white' }}
          flexItem
        />
        <ItemMiniBar>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <PhoneAndroid style={{ height: '13px' }} />
            <span style={{ fontSize: '10px', fontWeight: 'bold' }}>
              +230 52 93 51 11
            </span>
          </div>
        </ItemMiniBar>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: 'white' }}
          flexItem
        />
        <ItemMiniBar>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: '10px', fontWeight: 'bold' }}>Login</span>
          </div>
        </ItemMiniBar>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: 'white' }}
          flexItem
        />
        <ItemMiniBar>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: '10px', fontWeight: 'bold' }}>
              Register
            </span>
          </div>
        </ItemMiniBar>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: 'white' }}
          flexItem
        />
        <Box width={245} />
      </Stack>
    </Box>
  );
};

export default MiniBar;