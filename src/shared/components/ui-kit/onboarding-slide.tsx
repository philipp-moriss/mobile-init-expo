import React from 'react';
import {
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';

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
  return (
    <View style={[styles.container, style]}>
      {/* Верхняя секция: карточка */}
      <View style={styles.topSection}>
        <View style={styles.content}>
          {children}
        </View>
      </View>
      
      {/* Пагинация между карточкой и текстом */}
      {pagination && (
        <View style={styles.paginationWrapper}>
          {pagination}
        </View>
      )}
      
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  topSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    paddingTop: 24,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 327,
    height: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 6,
    padding: 24,
  },
  paginationWrapper: {
    alignItems: 'center',
    marginVertical: 16,
  },
  textContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 8,
    paddingHorizontal: 0,
    paddingBottom: 24,
  },
  title: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.5,
    textAlign: 'center',
    color: '#1A1A1A',
  },
  description: {
    fontFamily: 'Onest',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.5,
    textAlign: 'center',
    color: '#5A6E8A',
    opacity: 0.8,
  },
});

export default OnboardingSlide;
