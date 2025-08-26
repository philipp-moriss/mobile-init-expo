import React from "react";
import { SvgXml, XmlProps } from "react-native-svg";

export const BlockIcon = (props: Omit<XmlProps, "xml">) => {
  return (
    <SvgXml
      {...props}
      xml={`<svg width="25" height="30" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 14.75H7.5C6.11929 14.75 5 15.8693 5 17.25V32.25C5 33.6307 6.11929 34.75 7.5 34.75H27.5C28.8807 34.75 30 33.6307 30 32.25V17.25C30 15.8693 28.8807 14.75 27.5 14.75Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 14.75V11C26.25 8.67936 25.3281 6.45376 23.6872 4.81282C22.0462 3.17187 19.8206 2.25 17.5 2.25C15.1794 2.25 12.9538 3.17187 11.3128 4.81282C9.67187 6.45376 8.75 8.67936 8.75 11V14.75" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 26C18.1904 26 18.75 25.4404 18.75 24.75C18.75 24.0596 18.1904 23.5 17.5 23.5C16.8096 23.5 16.25 24.0596 16.25 24.75C16.25 25.4404 16.8096 26 17.5 26Z" fill="white" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};
