import React from "react";
import { SvgXml, XmlProps } from "react-native-svg";

export const BookIcon = (props: Omit<XmlProps, "xml">) => {
  return (
    <SvgXml
      {...props}
      xml={`<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_203_11552)">
<path d="M24 2H6C4.89543 2 4 2.89543 4 4V26C4 27.1046 4.89543 28 6 28H24C25.1046 28 26 27.1046 26 26V4C26 2.89543 25.1046 2 24 2Z" fill="#FC712C"/>
</g>
<path d="M24 23H6V25C6 25.5523 6.44772 26 7 26H23C23.5523 26 24 25.5523 24 25V23Z" fill="white"/>
<path d="M8.03418 7H23.0342" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.03418 12H23.0342" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.03418 17H17.0342" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter id="filter0_d_203_11552" x="0" y="0" width="30" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_203_11552"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_203_11552" result="shape"/>
</filter>
</defs>
</svg>


`}
    />
  );
};
