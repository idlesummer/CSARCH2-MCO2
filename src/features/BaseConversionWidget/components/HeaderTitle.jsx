import { capitalize } from '@mui/material';

export default function HeaderTitle({ fromValue, toValue }) {
  return (
    <>
      Convert 
      {fromValue && <> from <b>{capitalize(fromValue)}</b></>}
      {toValue && <> to <b>{capitalize(toValue)}</b></>}
    </>
  );
}
