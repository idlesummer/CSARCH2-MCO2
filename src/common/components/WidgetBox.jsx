import { Box, styled } from '@mui/material';

const WidgetBox = styled(Box)(({ theme }) => ({
  padding: '1.5rem',
  backgroundColor: theme.palette.background.alt,
  borderRadius: '0.75rem'
}));

export default WidgetBox;
