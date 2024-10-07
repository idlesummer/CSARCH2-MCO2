import { AppBar, Toolbar } from '@mui/material';

// Child components
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';

const styles = {
  toolbar: {
    justifyContent: 'space-between',
    gap: '2rem',
    padding: { 
      xs: '0.75rem 10%',
      md: '0.75 15%',
    },   
    backgroundColor: theme => theme.palette.background.alt,
  },
};

export default function Navbar() {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={styles.toolbar}>
        <Logo />
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
}
