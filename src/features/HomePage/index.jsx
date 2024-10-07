import { Box } from '@mui/material';
import Navbar from 'features/Navigation';
import ConversionSelection from 'features/BaseConversionWidget';
import FlexBetween from '../../common/components/FlexBetween';

const styles = {
  flexBetween: {
    padding: '2rem 5%',
    gap: '0.5rem',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <FlexBetween sx={styles.flexBetween}>
        <ConversionSelection />
      </FlexBetween>
    </Box>
  );
}
