import React from "react";
import { SvgXml, XmlProps } from "react-native-svg";

export const EmailIcon = (props: Omit<XmlProps, "xml">) => {
  return (
    <SvgXml
      {...props}
      xml={`<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0769 1H1.92308C1.41328 1 1 1.41328 1 1.92308V9.76923C1 10.279 1.41328 10.6923 1.92308 10.6923H12.0769C12.5867 10.6923 13 10.279 13 9.76923V1.92308C13 1.41328 12.5867 1 12.0769 1Z" fill="currentColor" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 2.15381L6.40923 6.76919C6.5751 6.90735 6.78413 6.983 7 6.983C7.21587 6.983 7.4249 6.90735 7.59077 6.76919L13 2.15381" fill="currentColor"/>
<path d="M1 2.15381L6.40923 6.76919C6.5751 6.90735 6.78413 6.983 7 6.983C7.21587 6.983 7.4249 6.90735 7.59077 6.76919L13 2.15381" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};
