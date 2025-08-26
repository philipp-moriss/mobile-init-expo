import React from "react";
import { SvgXml, XmlProps } from "react-native-svg";

export const SendIcon = (props: Omit<XmlProps, "xml">) => {
  return (
    <SvgXml
      {...props}
      xml={`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="13.25" stroke="#FC712C" stroke-width="1.5"/>
<path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="#FC712C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};
