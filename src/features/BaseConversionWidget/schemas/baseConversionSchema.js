import { z } from 'zod';
import bases from 'constants/bases';

export const schemas = Object.keys(bases).reduce((acc, base) => {
  acc[base] = z.object({
    digits: z.coerce.number()
      .min(1, 'Too small')
      .max(64, 'Too large'),

    number: z.string()
      .min(1, 'Input is required')
      .max(64, 'Maximum of 64 digits only')
      .transform(val => val.toLowerCase())
      .refine(value => value.split('').every(char => bases[base].includes(char)), {
        message: `Invalid character in ${base} number`,
      }),
  });

  return acc;
}, {});

export const defaultValues = {
  digits: 8,
  number: '',
};
