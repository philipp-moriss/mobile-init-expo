import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface BackgroundCirclesProps {
  variant?: 'welcome' | 'search' | 'services';
  style?: ViewStyle;
}

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({
  variant = 'welcome',
  style,
}) => {
  const getCircleStyle = () => {
    switch (variant) {
      case 'welcome':
        return {
          position: 'absolute',
          left: -33,
          top: 94,
          width: 440,
          height: 440,
          backgroundColor: '#C0EDFF',
        };
      case 'search':
        return {
          position: 'absolute',
          left: -80,
          top: -20,
          width: 440,
          height: 440,
          backgroundColor: 'rgba(25, 167, 233, 0.12)',
        };
      case 'services':
        return {
          position: 'absolute',
          left: 80,
          top: 120,
          width: 440,
          height: 440,
          backgroundColor: '#C0EDFF',
        };
      default:
        return {};
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.circle, getCircleStyle()]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  circle: {
    borderRadius: 220,
    opacity: 0.6,
    filter: 'blur(100px)',
  },
});

export default BackgroundCircles;
