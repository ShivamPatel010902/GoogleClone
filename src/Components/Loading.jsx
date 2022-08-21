import React from 'react'
import { css } from "@emotion/react";
import { DotLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 100px auto;
  border-color: red;
`;

export default function Loading() {
  return (
    <>
      <div className="sweet-loading">
      <DotLoader  color={'black'}  css={override} size={80} />
    </div>
    </>
  )
}
