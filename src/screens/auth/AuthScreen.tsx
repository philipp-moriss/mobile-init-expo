import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { useAuthStore } from '@/src/stores/auth.store';
import Button from '@components/ui-kit/button';
import Icon from '@components/ui-kit/icon';
import Input from '@components/ui-kit/input';
import Tabs from '@components/ui-kit/tabs';

const AuthScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState(); 
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Состояния фокуса для инпутов
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const { login } = useAuthStore();
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Определяем состояние инпута email
  const getEmailInputState = () => {
    if (emailFocused) return 'active';
    if (email && email.length > 0) return 'filled';
    return 'default';
  };

  // Определяем состояние инпута пароля
  const getPasswordInputState = () => {
    if (passwordFocused) return 'active';
    if (password && password.length > 0) return 'filled';
    return 'default';
  };

  return (
    <View style={styles.container}>
      {/* Градиентный фон */}
      <LinearGradient
        colors={['#4ADEDE', '#32C3E4', '#19A7E9', '#28ADEA', '#4BBAEE', '#5DC1F0', '#74CAF2']}
        style={styles.gradientBackground}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      
      {/* Логотип */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCard}>
          <Text style={styles.logoText}>Dock Map</Text>
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
                {/* Email - с иконкой конверта, как в макете */}
                <Input
                  type="mail"
                  state={getEmailInputState()}
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  icon="email"
                  containerStyle={styles.inputContainer}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                />

                {/* Пароль - с иконкой замка, как в макете */}
                <View style={styles.passwordContainer}>
                  <Input
                    type="base"
                    state={getPasswordInputState()}
                    placeholder="Введите пароль"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    icon="lock"
                    containerStyle={styles.passwordInput}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                  />
                  
                  {/* Кнопка показа/скрытия пароля */}
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={togglePasswordVisibility}
                  >
                    <Icon name="eye" size={20} color="#A1B0CA" />
                  </TouchableOpacity>
                </View>

                {/* Забыли пароль */}
                <TouchableOpacity
                  style={styles.forgotPasswordContainer}
                  onPress={handleForgotPassword}
                >
                  <Text style={styles.forgotPasswordText}>
                    Забыли пароль?
                  </Text>
                </TouchableOpacity>

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
          <Text style={styles.agreementText}>
            Продолжая вы принимаете условия{'\n'}Пользовательского соглашения{'\n'}и Политики конфиденциальности
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
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
    paddingTop: 60,
    paddingBottom: 40,
  },
  logoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 56,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  logoText: {
    fontFamily: 'Onest',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  mainContent: {
    flex: 1, // Растягиваем на всю оставшуюся высоту
    paddingHorizontal: 0, // Убираем горизонтальные отступы
  },
  contentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 6,
    flex: 1, // Растягиваем на всю доступную высоту
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0, // Убираем закругление снизу
    borderBottomRightRadius: 0, // Убираем закругление снизу
  },
  tabsContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  tabsWrapper: {
    width: '100%',
  },
  formContainer: {
    gap: 16,
  },
  inputContainer: {
    marginBottom: 0,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    marginBottom: 0,
    paddingRight: 60, // Место для кнопки глаза
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: 18,
    padding: 8,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    paddingVertical: 12,
  },
  forgotPasswordText: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#008FD2',
  },
  loginButton: {
    marginTop: 8,
  },
  registerButton: {
    marginTop: 8,
  },
  socialContainer: {
    gap: 24,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#EAF0F6',
  },
  dividerText: {
    fontFamily: 'Onest',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#7D8EAA',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF3F8',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 8,
  },
  socialButtonText: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#1A1A1A',
  },
  agreementText: {
    fontFamily: 'Onest',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#7D8EAA',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default AuthScreen;
