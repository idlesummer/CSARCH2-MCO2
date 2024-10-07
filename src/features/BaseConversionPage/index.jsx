import { useParams, Navigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import FlexBetween from 'components/FlexBetween';
import bases from 'constants/bases';
import BaseConversionWidget from 'features/BaseConversionWidget';
import Navbar from 'features/Navigation';

const styles = {
  flexBetween: {
    padding: '2rem 5%',
    gap: '0.5rem',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default function BaseConversionPage() {
  const { conversionBases } = useParams();
  const [fromValue, toValue] = conversionBases.split('-to-');

  if (!Object.keys(bases).includes(fromValue) || !Object.keys(bases).includes(toValue))
    return <Navigate to="/not-found" />;

  return (
    <Box>
      <Navbar />
      <FlexBetween sx={styles.flexBetween}>
        <BaseConversionWidget
          fromValueParam={fromValue}
          toValueParam={toValue}
          showCalculator
        />
      </FlexBetween>
    </Box>
  );
}
