import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemeColors, ThemeFonts, ThemeWeights, useTheme } from '@/src/shared/use-theme';
import { useAuthStore } from '@/src/stores/auth.store';
import Button from '@components/ui-kit/button';
import Icon from '@components/ui-kit/icon';
import Tabs from '@components/ui-kit/tabs';
import Input from '../../shared/components/ui-kit/input';

const AuthScreen: React.FC = () => {
  const { colors, sizes, fonts, weights } = useTheme();
  const { height: screenHeight } = Dimensions.get('window');
  
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState<string>(''); 
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Состояния фокуса для инпутов
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const { login } = useAuthStore();
  
  // Простая адаптивность
  const isSmallScreen = screenHeight < 700;
  
  const styles = createStyles({ colors, sizes, fonts, weights });
  
  const tabs = [
    { id: 'login', title: 'Вход' },
    { id: 'register', title: 'Регистрация' },
  ];

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId as 'login' | 'register');
  };

  const handleLogin = async () => {
    if (!email || !password) return;
    
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      console.error('Ошибка входа:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = () => {
    router.push('/registration-city' as any);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Вход через ${provider}`);
  };

  const handleForgotPassword = () => {
    console.log('Восстановление пароля');
  };




  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Градиентный фон */}
      <LinearGradient
        colors={['#4ADEDE', '#32C3E4', '#19A7E9', '#28ADEA', '#4BBAEE', '#5DC1F0', '#74CAF2']}
        style={styles.gradientBackground}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      
      {/* Логотип */}
      <View style={[styles.logoContainer, { 
        paddingTop: isSmallScreen ? sizes.sm : sizes.m,
        paddingBottom: isSmallScreen ? sizes.sm : sizes.m 
      }]}>
        <View style={styles.logoCard}>
          <Text style={[styles.logoText, { 
            fontFamily: fonts.button,
            fontWeight: weights.bold,
            color: colors.white 
          }]}>Dock Map</Text>
        </View>
      </View>

      {/* Основной контент */}
      <View style={styles.mainContent}>
        {/* Белая карточка для основного контента */}
        <View style={styles.contentCard}>
          {/* Табы */}
          <View style={styles.tabsContainer}>
            <Tabs
              type="type3"
              items={tabs}
              activeTabId={activeTab}
              onTabPress={handleTabPress}
              containerStyle={styles.tabsWrapper}
            />
          </View>

          {/* Форма */}
          <View style={styles.formContainer}>
            {activeTab === 'login' ? (
              <>
                {/* Поля ввода */}
                <View style={styles.inputsContainer}>
                  {/* Email */}
                  <Input
                    type="mail"
                    placeholder="Введите email"
                    value={email}
                    onChangeText={setEmail}
                  />

                  {/* Пароль и забыли пароль */}
                  <View style={styles.passwordContainer}>
                    <Input
                      type="password"
                      placeholder="Введите пароль"
                      value={password}
                      onChangeText={setPassword}
                    />
                    
                    {/* Забыли пароль */}
                    <TouchableOpacity
                      style={styles.forgotPasswordContainer}
                      onPress={handleForgotPassword}
                    >
                      <Text style={styles.forgotPasswordText}>
                        Забыли пароль?
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Кнопка входа */}
                <Button
                  type="primary"
                  onPress={handleLogin}
                  disabled={!email || !password || isLoading}
                  containerStyle={styles.loginButton}
                >
                  {isLoading ? 'Вход...' : 'Войти'}
                </Button>
              </>
            ) : (
              <>
                {/* Кнопка регистрации */}
                <Button
                  type="primary"
                  onPress={handleRegister}
                  containerStyle={styles.registerButton}
                >
                  Создать аккаунт
                </Button>
              </>
            )}
          </View>

          {/* Социальные сети */}
          <View style={styles.socialContainer}>
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>или войти через</Text>
              <View style={styles.divider} />
            </View>

            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin('telegram')}
              >
                <Icon name="telegram" size={24} color="#229ED9" />
                <Text style={styles.socialButtonText}>Telegram</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin('vk')}
              >
                <Icon name="vk" size={24} color="#0077FF" />
                <Text style={styles.socialButtonText}>Вконтакте</Text>
              </TouchableOpacity>
            </View>
          </View>

           {/* Пользовательское соглашение */}
           <Text style={[styles.agreementText, { 
             marginTop: isSmallScreen ? sizes.md : 95,
             fontFamily: fonts.text3,
             fontWeight: weights.normal,
             fontSize: 12,
             lineHeight: 16,
             color: colors.grey700
           }]}>
             Продолжая вы принимаете условия{'\n'}Пользовательского соглашения{'\n'}и Политики конфиденциальности
           </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const createStyles = ({ 
  colors, 
  sizes, 
  fonts, 
  weights 
}: {
  colors: ThemeColors;
  sizes: any;
  fonts: ThemeFonts;
  weights: ThemeWeights;
}) => StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 56,
    paddingHorizontal: sizes.md,
    paddingVertical: sizes.sm,
  },
  logoText: {
    fontSize: sizes.text2,
    lineHeight: sizes.m,
  },
  mainContent: {
    flex: 1, 
    paddingHorizontal: 0, 
  },
  contentCard: {
    backgroundColor: colors.background,
    borderRadius: sizes.md,
    padding: sizes.m,
    flex: 1, 
    borderTopLeftRadius: sizes.md,
    borderTopRightRadius: sizes.md,
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 0, 
    paddingBottom: 34, 
  },
  tabsContainer: {
    alignItems: 'center',
    marginBottom: sizes.md,
  },
  tabsWrapper: {
    width: '100%',
  },
  formContainer: {
    gap: sizes.m,
  },
  inputsContainer: {
    gap: sizes.sm,
  },
  passwordContainer: {
    gap: sizes.s,
  },
  inputContainer: {
    marginBottom: 0,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    paddingVertical: 12,
  },
  forgotPasswordText: {
    fontFamily: fonts.text3,
    fontWeight: weights.medium,
    fontSize: sizes.text3,
    lineHeight: 20,
    color: colors.primary600,
  },
  loginButton: {
    marginTop: sizes.s,
  },
  registerButton: {
    marginTop: sizes.s,
  },
  socialContainer: {
    gap: sizes.md,
    marginTop: sizes.m,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizes.s,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.grey200,
  },
  dividerText: {
    fontFamily: fonts.text3,
    fontWeight: weights.normal,
    fontSize: sizes.text3,
    lineHeight: 20,
    color: colors.grey700,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    gap: sizes.s,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey100,
    borderRadius: sizes.sm,
    paddingVertical: sizes.sm,
    paddingHorizontal: sizes.m,
    gap: sizes.s,
  },
  socialButtonText: {
    fontFamily: fonts.text3,
    fontWeight: weights.medium,
    fontSize: sizes.text3,
    lineHeight: 20,
    color: colors.black,
  },
  agreementText: {
    textAlign: 'center',
  },
});

export default AuthScreen;
