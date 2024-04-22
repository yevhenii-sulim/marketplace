import GoogleSVG from 'SvgComponents/GoogleSVG/GoogleSVG';
import { LinkGoIn } from './ContinueVia.styled';
import FacebookSVG from 'SvgComponents/FacebookSVG/FacebookSVG';
import { Button } from '@mui/material';
import { socialSingInButton } from './material styles/material-styles';

export default function ContinueVia() {
  return (
    <>
      <LinkGoIn>
        <GoogleSVG />
        <p>
          Продовжити через<span> Google</span>
        </p>
      </LinkGoIn>
      <Button
        href={process.env.API_UPL + '/auth/facebook'}
        variant="outlined"
        sx={socialSingInButton}
      >
        <FacebookSVG />
        <p>
          Продовжити через<span> Facebook</span>
        </p>
      </Button>
    </>
  );
}
