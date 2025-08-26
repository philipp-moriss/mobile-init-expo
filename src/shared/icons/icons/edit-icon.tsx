import React from "react";
import { SvgXml, XmlProps } from "react-native-svg";

export const EditIcon = (props: Omit<XmlProps, "xml">) => {
  return (
    <SvgXml
      {...props}
      xml={`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.6665 13.3332H5.33317L12.3332 6.33321C12.5083 6.15811 12.6472 5.95024 12.7419 5.72147C12.8367 5.4927 12.8855 5.2475 12.8855 4.99988C12.8855 4.75225 12.8367 4.50705 12.7419 4.27828C12.6472 4.04951 12.5083 3.84164 12.3332 3.66654C12.1581 3.49145 11.9502 3.35255 11.7214 3.25779C11.4927 3.16303 11.2475 3.11426 10.9998 3.11426C10.7522 3.11426 10.507 3.16303 10.2782 3.25779C10.0495 3.35255 9.8416 3.49145 9.6665 3.66654L2.6665 10.6665V13.3332Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 4.3335L11.6667 7.00016" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};
