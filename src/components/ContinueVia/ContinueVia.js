import GoogleSVG from 'SvgComponents/GoogleSVG/GoogleSVG';
import { LinkGoIn } from './ContinueVia.styled';
import FacebookSVG from 'SvgComponents/FacebookSVG/FacebookSVG';

export default function ContinueVia() {
  return (
    <>
      <LinkGoIn>
        <GoogleSVG />
        <p>
          Продовжити через<span> Google</span>
        </p>
      </LinkGoIn>
      <LinkGoIn>
        <FacebookSVG />
        <p>
          Продовжити через<span> Facebook</span>
        </p>
      </LinkGoIn>
    </>
  );
}
