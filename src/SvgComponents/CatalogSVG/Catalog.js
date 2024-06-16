import React from 'react';
import { SvgCatalog } from './Catalog.styled';

export default function Catalog() {
  return (
    <>
      <SvgCatalog
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.33301 1.33333H9.33301V9.33333H1.33301V1.33333ZM14.6663 1.33333H22.6663V9.33333H14.6663V1.33333ZM1.33301 14.6667H9.33301V22.6667H1.33301V14.6667ZM14.6663 18.6667C14.6663 19.7275 15.0878 20.7449 15.8379 21.4951C16.5881 22.2452 17.6055 22.6667 18.6663 22.6667C19.7272 22.6667 20.7446 22.2452 21.4948 21.4951C22.2449 20.7449 22.6663 19.7275 22.6663 18.6667C22.6663 17.6058 22.2449 16.5884 21.4948 15.8382C20.7446 15.0881 19.7272 14.6667 18.6663 14.6667C17.6055 14.6667 16.5881 15.0881 15.8379 15.8382C15.0878 16.5884 14.6663 17.6058 14.6663 18.6667Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgCatalog>
    </>
  );
}
