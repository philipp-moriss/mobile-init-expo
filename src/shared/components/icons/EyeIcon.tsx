import React from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface EyeIconProps {
  style?: ViewStyle;
  color?: string;
  size?: number;
}

const EyeIcon: React.FC<EyeIconProps> = ({ 
  style, 
  color = '#1A1A1A', 
  size = 32 
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
      <Path
        d="M8.125 10C8.125 8.9645 8.9645 8.125 10 8.125C11.0355 8.125 11.875 8.9645 11.875 10C11.875 11.0355 11.0355 11.875 10 11.875C8.9645 11.875 8.125 11.0355 8.125 10Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.66663 9.99999C1.66663 11.3662 2.02076 11.8262 2.72903 12.7464C4.14326 14.5837 6.51505 16.6667 9.99996 16.6667C13.4849 16.6667 15.8566 14.5837 17.2709 12.7464C17.9791 11.8262 18.3333 11.3662 18.3333 9.99999C18.3333 8.63383 17.9791 8.17377 17.2709 7.2536C15.8566 5.4163 13.4849 3.33333 9.99996 3.33333C6.51505 3.33333 4.14326 5.4163 2.72903 7.2536C2.02076 8.17377 1.66663 8.63383 1.66663 9.99999ZM9.99996 6.87499C8.27407 6.87499 6.87496 8.2741 6.87496 9.99999C6.87496 11.7259 8.27407 13.125 9.99996 13.125C11.7259 13.125 13.125 11.7259 13.125 9.99999C13.125 8.2741 11.7259 6.87499 9.99996 6.87499Z"
        fill={color}
      />
    </Svg>
  );
};

export default EyeIcon;
