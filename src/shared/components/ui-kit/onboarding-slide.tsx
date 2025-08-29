import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import { useTheme } from '@/src/shared/use-theme';

interface OnboardingSlideProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  pagination?: React.ReactNode;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
}

const OnboardingSlide: React.FC<OnboardingSlideProps> = ({
  title,
  description,
  children,
  pagination,
  style,
  titleStyle,
  descriptionStyle,
}) => {
  const { colors, fonts, weights } = useTheme();
  const styles = getStyles(colors, fonts, weights);
  
  return (
    <View style={[styles.container, style]}>
      {/* Верхняя секция: карточка */}
      <View style={styles.topSection}>
        <View style={styles.content}>
          {children}
        </View>
        
        {/* Пагинация сразу после карточки */}
        {pagination && (
          <View style={styles.paginationWrapper}>
            {pagination}
          </View>
        )}
      </View>
      
      {/* Текстовая информация */}
      <View style={styles.textContainer}>
        <Text style={[styles.title, titleStyle]}>
          {title}
        </Text>
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const getStyles = (colors: any, fonts: any, weights: any) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'visible',
  },
  topSection: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingTop: 40,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 327,
    height: 400,
    backgroundColor: colors.white,
    borderRadius: 40,
    shadowColor: colors.black,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 6,
    padding: 24,
  },
  paginationWrapper: {
    alignItems: 'center',
    marginTop: 8,
  },
  textContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 8,
    marginBottom: 24,
  },
  title: {
    fontFamily: fonts.h2,
    fontWeight: weights.medium,
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.5,
    textAlign: 'center',
    color: colors.black,
  },
  description: {
    fontFamily: fonts.text2,
    fontWeight: weights.text2,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.5,
    textAlign: 'center',
    color: colors.grey900,
    opacity: 0.8,
  },
});

export default OnboardingSlide;
