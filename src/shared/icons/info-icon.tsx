import React from "react";
import { SvgXml, XmlProps } from "react-native-svg";

export const InfoIcon = (props: Omit<XmlProps, "xml">) => {
  return (
    <SvgXml
      {...props}
      xml={`<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_203_11544)">
<path d="M16.9999 27.0716C23.6668 27.0716 29.0713 21.667 29.0713 15.0001C29.0713 8.33327 23.6668 2.92871 16.9999 2.92871C10.333 2.92871 4.92847 8.33327 4.92847 15.0001C4.92847 21.667 10.333 27.0716 16.9999 27.0716Z" fill="#FD941A"/>
</g>
<path d="M17 15V21.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9999 11.2859C17.5127 11.2859 17.9284 10.8701 17.9284 10.3573C17.9284 9.84445 17.5127 9.42871 16.9999 9.42871C16.487 9.42871 16.0713 9.84445 16.0713 10.3573C16.0713 10.8701 16.487 11.2859 16.9999 11.2859Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter id="filter0_d_203_11544" x="0.928467" y="0.928711" width="32.1428" height="32.1431" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_203_11544"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_203_11544" result="shape"/>
</filter>
</defs>
</svg>


`}
    />
  );
};
