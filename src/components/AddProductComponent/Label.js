import React from 'react';
import { LabelSign } from './AddProductComponent.styled';
import MarkSvg from 'SvgComponents/MarkSVG/MarkSvg';

export default function Label({ label }) {
  return (
    <>
      <LabelSign>
        <span className="label-place">
          {label}
          <MarkSvg />
        </span>
      </LabelSign>
    </>
  );
}
