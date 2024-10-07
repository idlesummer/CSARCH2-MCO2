import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const styles = {
  typography: {
  '&:hover': (theme) => ({
      color: theme.palette.primary.dark,
      cursor: 'pointer',
    }),
  },
};


export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Typography
      fontWeight="bold"
      fontSize="2rem"
      color="primary"
      sx={styles.typography}
      onClick={() => navigate('/home')}
    >
      BitConvert
    </Typography>
  );
}
