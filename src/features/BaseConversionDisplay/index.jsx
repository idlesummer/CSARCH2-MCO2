import { capitalize } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';

const styles = {
  display: {
    paddingTop: '0.5rem',
  },
};

export default function BaseConversionDisplay({ toValue, output }) {
  return (
    <Grid container 
      columnSpacing={1} 
      rowSpacing={2}
    >
      <Grid size={12}>
        <Divider />   
      </Grid>

      <Grid size={12} sx={styles.display}>
        <TextField
          label={`${capitalize(toValue)} number`}
          value={output?.number || ''}
          slotProps={{ input: { readOnly: true }}}
          fullWidth
        />
      </Grid>
      
      <Grid size={12}>
        <TextField
          label={`Signed number (base's complement)`}
          value={output?.basecomp || ''}
          slotProps={{ input: { readOnly: true }}}
          fullWidth
        />
      </Grid>

      <Grid size={12}>
        <TextField
          label={`Signed number (2's complement)`}
          value={output?.twoscomp || ''}
          slotProps={{ input: { readOnly: true }}}
          fullWidth
        />
      </Grid>
      <Grid size={12}>
        <TextField
          label={`Signed number (1's complement)`}
          value={output?.onescomp || ''}
          slotProps={{ input: { readOnly: true }}}
          fullWidth
        />
      </Grid>
      <Grid size={12}>
        <TextField
          label={`Signed number (sign and magnitude)`}
          value={output?.signmag || ''}
          slotProps={{ input: { readOnly: true }}}
          fullWidth
        />
      </Grid>
    </Grid>
  );
}
