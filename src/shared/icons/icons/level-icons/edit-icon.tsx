import React from "react";
import { SvgXml, XmlProps } from "react-native-svg";

export const EditIcon = (props: Omit<XmlProps, "xml">) => {
  return (
    <SvgXml
      {...props}
      xml={`<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 33H12.3067L31.4867 13.8199C31.9665 13.3402 32.3471 12.7706 32.6067 12.1438C32.8664 11.5169 33 10.8451 33 10.1666C33 9.48812 32.8664 8.81627 32.6067 8.18943C32.3471 7.56259 31.9665 6.99303 31.4867 6.51326C31.007 6.0335 30.4374 5.65293 29.8106 5.39329C29.1837 5.13364 28.5119 5 27.8334 5C27.1549 5 26.4831 5.13364 25.8562 5.39329C25.2294 5.65293 24.6598 6.0335 24.1801 6.51326L5 25.6933V33Z" stroke="#2B8280" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.5 9.5L29 16" stroke="#2B8280" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};
