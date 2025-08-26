import React from "react";
import {SvgXml, XmlProps} from "react-native-svg";

export const PlusIcon = (props: Omit<XmlProps, "xml">) => {
    return (
        <SvgXml
            {...props}
            xml={`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 30C24.6274 30 30 24.6274 30 18C30 11.3726 24.6274 6 18 6C11.3726 6 6 11.3726 6 18C6 24.6274 11.3726 30 18 30Z" stroke="#08B1BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 10.5V25.5" stroke="#08B1BD" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10.5 18H25.5" stroke="#08B1BD" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`}
        />
    );
};
