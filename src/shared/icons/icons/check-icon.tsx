import React from "react";
import { SvgXml, XmlProps } from "react-native-svg";

export const CheckIcon = (props: Omit<XmlProps, "xml">) => {
  return (
    <SvgXml
      {...props}
      xml={`<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 6.77778L3.96111 9.14667C4.04064 9.21216 4.13376 9.2591 4.2337 9.28409C4.33364 9.30907 4.4379 9.31147 4.53889 9.29111C4.64084 9.27199 4.73748 9.23112 4.82223 9.1713C4.90697 9.11148 4.97784 9.03411 5.03 8.94444L9.66667 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};
