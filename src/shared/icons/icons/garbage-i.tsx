import React from "react";
import { SvgXml, XmlProps } from "react-native-svg";

export const GarbageIcon = (props: Omit<XmlProps, "xml">) => {
  return (
    <SvgXml
      {...props}
      xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_62_6697)">
<path d="M17.1429 10.2861L16 19.429H8.00003L6.85718 10.2861" stroke="#FC712C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.14282 8H18.8571" stroke="#FC712C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.09717 7.66883V5.69169C9.09717 5.38858 9.21758 5.09789 9.4319 4.88356C9.64623 4.66924 9.93692 4.54883 10.24 4.54883H13.6686C13.9717 4.54883 14.2624 4.66924 14.4767 4.88356C14.691 5.09789 14.8115 5.38858 14.8115 5.69169V7.9774" stroke="#FC712C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 11L10.5 17" stroke="#FC712C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M13.5 11L13 17" stroke="#FC712C" stroke-width="1.5" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_62_6697">
<rect width="16" height="16" fill="white" transform="translate(4 4)"/>
</clipPath>
</defs>
</svg>
`}
    />
  );
};
