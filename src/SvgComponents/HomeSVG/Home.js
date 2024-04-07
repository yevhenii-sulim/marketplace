import { Svg } from 'SvgComponents/Svg.styled';

export default function Home() {
  return (
    <>
      <Svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66667 16H4L16 4L28 16H25.3333M6.66667 16V25.3333C6.66667 26.0406 6.94762 26.7189 7.44772 27.219C7.94781 27.719 8.62609 28 9.33333 28H22.6667C23.3739 28 24.0522 27.719 24.5523 27.219C25.0524 26.7189 25.3333 26.0406 25.3333 25.3333V16"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 28V20C12 19.2927 12.281 18.6145 12.781 18.1144C13.2811 17.6143 13.9594 17.3333 14.6667 17.3333H17.3333C18.0406 17.3333 18.7189 17.6143 19.219 18.1144C19.719 18.6145 20 19.2927 20 20V28"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </>
  );
}
