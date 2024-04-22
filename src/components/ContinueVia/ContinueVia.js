import GoogleSVG from 'SvgComponents/GoogleSVG/GoogleSVG';
import { LinkGoIn } from './ContinueVia.styled';
import FacebookSVG from 'SvgComponents/FacebookSVG/FacebookSVG';
import { Button } from '@mui/material';
import { socialSingInButton } from './material styles/material-styles';
import { useState } from 'react';

export default function ContinueVia() {
  const [facebookAuthUrl] = useState(
    process.env.REACT_APP_API_URL + '/auth/facebook'
  );
  return (
    <>
      <LinkGoIn>
        <GoogleSVG />
        <p>
          Продовжити через<span> Google</span>
        </p>
      </LinkGoIn>
      <Button href={facebookAuthUrl} variant="outlined" sx={socialSingInButton}>
        <FacebookSVG />
        <p>
          Продовжити через<span> Facebook</span>
        </p>
      </Button>
    </>
  );
}
