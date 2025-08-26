import React from "react";
import { SvgXml, XmlProps } from "react-native-svg";

export const MessagesIcon = (props: Omit<XmlProps, "xml">) => {
  return (
    <SvgXml
      {...props}
      xml={`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9.33333L12 7.33333H7.33329C7.15648 7.33333 6.98691 7.26309 6.86189 7.13807C6.73686 7.01305 6.66663 6.84348 6.66663 6.66667V2.66667C6.66663 2.48986 6.73686 2.32029 6.86189 2.19526C6.98691 2.07024 7.15648 2 7.33329 2H13.3333C13.5101 2 13.6797 2.07024 13.8047 2.19526C13.9297 2.32029 14 2.48986 14 2.66667V9.33333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33333 10.0003V11.3337C9.33333 11.5105 9.26309 11.68 9.13807 11.8051C9.01305 11.9301 8.84348 12.0003 8.66667 12.0003H4L2 14.0003V7.33366C2 7.15685 2.07024 6.98728 2.19526 6.86225C2.32029 6.73723 2.48986 6.66699 2.66667 6.66699H4" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};
