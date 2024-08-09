import { RotatingLines } from 'react-loader-spinner';

function Loader({ isAlreadyLoad }) {
  return (
    <RotatingLines
      visible={isAlreadyLoad}
      color="grey"
      height={32}
      width={32}
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="loading"
    />
  );
}

export default Loader;
