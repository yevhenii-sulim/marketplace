import { SvgArrow } from './Arrow.styled';

export default function ArrowNext() {
  return (
    <>
      <SvgArrow
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8L20 16L12 24"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SvgArrow>
    </>
  );
}