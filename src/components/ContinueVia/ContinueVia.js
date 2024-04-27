import GoogleSVG from 'SvgComponents/GoogleSVG/GoogleSVG';
import FacebookSVG from 'SvgComponents/FacebookSVG/FacebookSVG';
import { Button } from '@mui/material';
import { socialSingInButton } from './material styles/material-styles';
import { useState } from 'react';
import { LinkGoIn } from './ContinueVia.styled';

export default function ContinueVia() {
  const [facebookAuthUrl] = useState(
    process.env.REACT_APP_API_URL + '/auth/facebook'
  );
  return (
    <>
      <Button variant="outlined" sx={socialSingInButton}>
        <GoogleSVG />
        <LinkGoIn>Продовжити через Google</LinkGoIn>
      </Button>
      <Button href={facebookAuthUrl} variant="outlined" sx={socialSingInButton}>
        <FacebookSVG />
        <LinkGoIn>Продовжити через Facebook</LinkGoIn>
      </Button>
    </>
  );
}
