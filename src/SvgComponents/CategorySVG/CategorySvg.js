import { SvgCategory } from './CategorySvg.styled';

export default function CategorySvg({ height, width, stroke }) {
  return (
    <>
      <SvgCategory
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <path
          d="M5.33301 5.33337H13.333V13.3334H5.33301V5.33337ZM18.6663 5.33337H26.6663V13.3334H18.6663V5.33337ZM5.33301 18.6667H13.333V26.6667H5.33301V18.6667ZM18.6663 22.6667C18.6663 23.7276 19.0878 24.745 19.8379 25.4951C20.5881 26.2453 21.6055 26.6667 22.6663 26.6667C23.7272 26.6667 24.7446 26.2453 25.4948 25.4951C26.2449 24.745 26.6663 23.7276 26.6663 22.6667C26.6663 21.6058 26.2449 20.5884 25.4948 19.8383C24.7446 19.0881 23.7272 18.6667 22.6663 18.6667C21.6055 18.6667 20.5881 19.0881 19.8379 19.8383C19.0878 20.5884 18.6663 21.6058 18.6663 22.6667Z"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgCategory>
    </>
  );
}
