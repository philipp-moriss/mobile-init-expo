import React from "react";
import { SvgXml, XmlProps } from "react-native-svg";

export const WaitIcon = (props: Omit<XmlProps, "xml">) => {
  return (
    <SvgXml
      {...props}
      xml={`<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.0909 11.4769C28.0909 13.7904 27.1858 16.0092 25.5747 17.6451C23.9636 19.281 21.7784 20.2 19.5 20.2C17.2215 20.2 15.0364 19.281 13.4253 17.6451C11.8142 16.0092 10.9091 13.7904 10.9091 11.4769V4H28.0909V11.4769Z" stroke="#08B1BD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.0909 28.9228C28.0909 26.6093 27.1858 24.3905 25.5747 22.7546C23.9636 21.1187 21.7784 20.1997 19.5 20.1997C17.2215 20.1997 15.0364 21.1187 13.4253 22.7546C11.8142 24.3905 10.9091 26.6093 10.9091 28.9228V36.3997H28.0909V28.9228Z" stroke="#08B1BD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 4H33" stroke="#08B1BD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 36.3999H33" stroke="#08B1BD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};
