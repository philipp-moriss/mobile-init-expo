import React from "react";
import { SvgXml, XmlProps } from "react-native-svg";

export const YoutubeIcon = (props: Omit<XmlProps, "xml">) => {
  return (
    <SvgXml
      {...props}
      xml={`<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_203_11533)">
<g filter="url(#filter0_d_203_11533)">
<path d="M22.4505 4.66943H5.60482C3.53735 4.66943 1.86133 6.34545 1.86133 8.41293V19.6434C1.86133 21.7109 3.53735 23.3869 5.60482 23.3869H22.4505C24.518 23.3869 26.194 21.7109 26.194 19.6434V8.41293C26.194 6.34545 24.518 4.66943 22.4505 4.66943Z" fill="#08B1BD"/>
</g>
<path d="M10.8646 18.3706V10.5093C10.8607 10.3765 10.893 10.2453 10.9582 10.1296C11.0233 10.0139 11.1188 9.91816 11.2343 9.85269C11.3499 9.78723 11.4811 9.75452 11.6138 9.75807C11.7465 9.76163 11.8758 9.80132 11.9876 9.87288L18.7259 13.8035C18.8385 13.8696 18.9319 13.9639 18.9967 14.0772C19.0616 14.1905 19.0957 14.3188 19.0957 14.4493C19.0957 14.5798 19.0616 14.7081 18.9967 14.8214C18.9319 14.9346 18.8385 15.029 18.7259 15.095L11.9876 19.0257C11.8733 19.0917 11.7436 19.1263 11.6116 19.126C11.4796 19.1257 11.35 19.0906 11.236 19.024C11.122 18.9575 11.0276 18.8621 10.9623 18.7473C10.8971 18.6326 10.8634 18.5026 10.8646 18.3706Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_203_11533" x="-2.13867" y="2.66943" width="32.3328" height="26.7173" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_203_11533"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_203_11533" result="shape"/>
</filter>
<clipPath id="clip0_203_11533">
<rect width="26.2044" height="26.2044" fill="white" transform="translate(0.925293 0.925781)"/>
</clipPath>
</defs>
</svg>

`}
    />
  );
};
