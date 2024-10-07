import { IconButton, InputBase, useMediaQuery } from '@mui/material';
import { Menu, Search } from '@mui/icons-material';
import FlexBetween from 'components/FlexBetween';

const styles = {
  flexbetween: {
    flexGrow: 1,
    flexBasis: '50%', // Set initial width to 50% of available space
    maxWidth: '50%',
    backgroundColor: theme => theme.palette.neutral.light,
    borderRadius: '0.75rem',
    gap: '3rem',
    padding: '0.3rem 1rem',
  },
};

export default function SearchBar() {
  const isMobileScreen = useMediaQuery('(min-width:900px)');
  
  return (
    <>
      {isMobileScreen ? (
        <FlexBetween sx={styles.flexbetween}>
          <InputBase placeholder="Search..."/>
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
      ) : (
        <IconButton>
          <Menu />
        </IconButton>
      )}
    </>
  );
}
