import React from "react";
import { SvgXml, XmlProps } from "react-native-svg";

export const CloseIcon = (props: Omit<XmlProps, "xml">) => {
  return (
    <SvgXml
      {...props}
      xml={`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 0.5L0.5 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.5 0.5L13.5 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};
