import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { capitalize } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import TextField from '@mui/material/TextField';

import bases from 'constants/bases';
import BaseConversionDisplay from 'features/BaseConversionDisplay';

import HeaderTitle from './components/HeaderTitle';
import { defaultValues, schemas } from './schemas/baseConversionSchema';

const styles = {
  button: {
    height: '2.5rem',
  },
  conversionContainer: {
    width: '570px',
  },
  conversionItem: {
    minHeight: '1.5rem',
    padding: '0 1rem',
  },
  swap: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default function ConversionSelection({ fromValueParam, toValueParam, showCalculator = false }) {  
  const navigate = useNavigate();
  const [fromValue, setFromValue] = useState(fromValueParam || '');
  const [toValue, setToValue] = useState(toValueParam || '');
  const [output, setOutput] = useState({});
  const { control, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(schemas[fromValueParam]),
  });

  const baseOptions = useMemo(() => ['', ...Object.keys(bases)], [bases]);
  const baseConversionPath = `/convert/${fromValue.toLowerCase()}-to-${toValue.toLowerCase()}`;
  
  const handleSwap = () => {
    setFromValue(toValue);
    setToValue(fromValue);
  };
  
  const onSubmit = (data) => {
    setOutput({
      number: data.number,
      basecomp: data.number,
      onescomp: data.number,
      twoscomp: data.number,
      signmag: data.number,
    });
  };
  
  const handleConvert = () => {
    if (showCalculator)
      return handleSubmit(onSubmit)();
    navigate(baseConversionPath);
  };

  useEffect(() => {
    if (fromValue && toValue && showCalculator)
      navigate(baseConversionPath);
  }, [fromValue, toValue]);

  return (
    <Card elevation={0} sx={styles.conversionContainer}>
      <CardHeader title={<HeaderTitle fromValue={fromValue} toValue={toValue}/>} />
      <Divider />

      <CardContent>
        <Grid container columnSpacing={1} rowSpacing={2}>
          
          {/* To entry */}
          <Grid size={showCalculator ? 4.5 : 5.5}>
            <FormControl fullWidth>
              <InputLabel>From</InputLabel>
              <Select
                value={fromValue}
                onChange={e => setFromValue(e.target.value)}
                label="From"
              >
                {baseOptions.map((option, index) => (
                  <MenuItem 
                    key={index} 
                    value={option} 
                    disabled={!!toValue && toValue === option}
                    sx={styles.conversionItem}
                  >
                    {capitalize(option) || '---'}
                  </MenuItem> 
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          {/* Swap button */}
          <Grid size={1} sx={styles.swap}>
            <Box>
              <IconButton onClick={handleSwap}>
                <SwapHorizIcon/>
              </IconButton>
            </Box>
          </Grid>

          {/* From entry */}
          <Grid size={showCalculator ? 4.5 : 5.5}>
            <FormControl fullWidth>
              <InputLabel>To</InputLabel>
              <Select
                value={toValue}
                onChange={e => setToValue(e.target.value)}
                label="To"
              >
                {baseOptions.map((option, index) => (
                  <MenuItem 
                    key={index} 
                    value={option} 
                    disabled={!!fromValue && fromValue === option}
                    sx={styles.conversionItem}
                  >
                    {capitalize(option) || '---'}
                  </MenuItem> 
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Digits entry */}
          {showCalculator && (
            <Grid size={2}>
              <Controller
                name="digits"
                control={control}
                render={({ field }) => (
                  <TextField 
                    label="Digits"
                    {...field}
                    error={!!errors.digits}
                    helperText={errors.digits?.message}
                    type="number"
                  />
                )}
              />
            </Grid>
          )}
          
          {/* Number input entry */}
          {showCalculator && (
            <Grid size={12}>
              <Controller
                name="number"
                control={control}
                render={({ field }) => (
                  <TextField
                    label={`Enter ${fromValue} number`}
                    {...field}
                    error={!!errors.number}
                    helperText={errors.number?.message}
                    autoFocus
                    fullWidth
                  />
                )} 
              />
            </Grid>
          )}
          
          {/* Convert button */}
          <Grid size={12}>
            <Button
              // type="submit"
              variant="contained"
              onClick={handleConvert}
              disabled={!fromValue || !toValue}
              disableElevation
              fullWidth
              sx={styles.button}
            >
              Convert
            </Button>
          </Grid>
          
          {/* Display component */}
          {showCalculator && (
            <Grid size={12}>
              <BaseConversionDisplay toValue={toValue} output={output} />
            </Grid>
          )}
          
        </Grid>
      </CardContent>
    </Card>
  );
}
