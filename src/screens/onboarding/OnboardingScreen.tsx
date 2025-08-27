import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/src/shared/use-theme';
import { OnboardingSlide as OnboardingSlideType } from '@/src/types';
import BackgroundCircles from '@components/ui-kit/background-circles';
import Button from '@components/ui-kit/button';
import OnboardingPagination from '@components/ui-kit/onboarding-pagination';
import OnboardingSlide from '@components/ui-kit/onboarding-slide';

const { width } = Dimensions.get('window');
const slideInnerWidth = width;

const OnboardingScreen: React.FC = () => {
  const { colors, fonts, weights, sizes } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  
  const styles = getStyles(colors);

  const slides: OnboardingSlideType[] = [
    {
      id: 1,
      title: 'Добро пожаловать\nв Dock Map',
      description: 'Быстрое бронирование причалов\nи управление сервисами',
      image: 'welcome',
    },
    {
      id: 2,
      title: 'Мгновенный поиск швартовок',
      description: 'Выбирайте клуб по карте, проверяйте доступные места и бронируйте причал в пару кликов',
      image: 'search',
    },
    {
      id: 3,
      title: 'Управление услугами',
      description: 'От построения интерактивной карты причала до управления бронированиями и расписанием',
      image: 'services',
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      const nextSlide = currentSlide + 1;
      setIsProgrammaticScroll(true);
      scrollViewRef.current?.scrollTo({ x: nextSlide * width, animated: true });
      setTimeout(() => {
        setCurrentSlide(nextSlide);
        setIsProgrammaticScroll(false);
      }, 300);
    } else {
      router.replace('/auth');
    }
  };

  const handleSkip = () => {
    router.replace('/auth');
  };

  const handleScroll = (event: any) => {
    if (isProgrammaticScroll) return;
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    if (slideIndex >= 0 && slideIndex < slides.length) {
      setCurrentSlide(slideIndex);
    }
  };

  const renderSlideContent = (slide: OnboardingSlideType) => {
    switch (slide.image) {
      case 'welcome':
        return (
          <View style={styles.welcomeContent}>
            <BackgroundCircles variant="welcome" />
            <View style={styles.welcomeCard}>
              <View style={styles.welcomeIcon} />
            </View>
          </View>
        );
      case 'search':
        return (
          <View style={styles.searchContent}>
            <BackgroundCircles variant="search" />
            <View style={styles.searchImageCard}>
              <Image
                source={require('@/assets/images/onboarding-slide-2.png')}
                style={styles.searchImage}
              />
            </View>
          </View>
        );
      case 'services':
        return (
          <View style={styles.servicesContent}>
            <BackgroundCircles variant="services" />
            <View style={styles.servicesCard}>
              <View style={styles.servicesIcon} />
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={styles.scrollView}
        >
          {slides.map((slide, index) => (
            <View key={slide.id} style={[styles.slide, { width }]}>
              <OnboardingSlide
                title={slide.title}
                description={slide.description}
                pagination={
                  <OnboardingPagination
                    totalSlides={slides.length}
                    currentSlide={currentSlide}
                  />
                }
              >
                {renderSlideContent(slide)}
              </OnboardingSlide>
            </View>
          ))}
        </ScrollView>

        <View style={styles.bottomSection}>
          <View style={styles.buttonContainer}>
            {currentSlide < slides.length - 1 && (
              <Button
                type="secondary"
                onPress={handleSkip}
                containerStyle={styles.skipButton}
              >
                Пропустить
              </Button>
            )}
            
            <Button
              type="primary"
              onPress={handleNext}
              containerStyle={
                currentSlide === slides.length - 1 
                  ? styles.startButton 
                  : styles.nextButton
              }
            >
              {currentSlide === slides.length - 1 ? 'Начать' : 'Далее'}
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const getStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSection: {
    paddingHorizontal: 16,
    paddingBottom: 34,
    gap: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  skipButton: {
    flex: 1,
  },
  nextButton: {
    flex: 1,
  },
  startButton: {
    flex: 1,
  },
  welcomeContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: slideInnerWidth,
  },
  welcomeCard: {
    width: 120,
    height: 120,
    backgroundColor: colors.white,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 6,
  },
  welcomeIcon: {
    width: 60,
    height: 60,
    backgroundColor: colors.grey200,
    borderRadius: 30,
  },
  searchContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: slideInnerWidth,
  },
  searchImageCard: {
    width: 280,
    height: 200,
    backgroundColor: colors.white,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 6,
  },
  searchImage: {
    width: 260,
    height: 180,
    borderRadius: 16,
  },
  servicesContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: slideInnerWidth,
  },
  servicesCard: {
    width: 120,
    height: 120,
    backgroundColor: colors.white,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 6,
  },
  servicesIcon: {
    width: 60,
    height: 60,
    backgroundColor: colors.grey200,
    borderRadius: 30,
  },
});

export default OnboardingScreen;
