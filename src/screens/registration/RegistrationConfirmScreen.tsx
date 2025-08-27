import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuthStore } from '@/src/stores/auth.store';
import Button from '@components/ui-kit/button';
import Input from '@components/ui-kit/input';
import { ArrowBackIcon } from '../../shared/components/icons';

const RegistrationConfirmScreen: React.FC = () => {
  const [code, setCode] = useState('');
  const [isResending, setIsResending] = useState(false);
  
  const { verifyEmail, isLoading } = useAuthStore();

  const handleConfirm = async () => {
    if (code.length === 6) {
      try {
        await verifyEmail(code);
        router.replace('/home' as any);
      } catch (error) {
        console.error('Ошибка подтверждения:', error);
      }
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleResendCode = () => {
    setIsResending(true);
    // Логика повторной отправки кода
    setTimeout(() => setIsResending(false), 30000); // 30 секунд
  };

  const isCodeValid = code.length === 6;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Top Bar */}
          <View style={styles.topBar}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <ArrowBackIcon style={styles.backIcon} />
            </TouchableOpacity>
            
            <Text style={styles.title}>Регистрация</Text>
            
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3/3</Text>
            </View>
          </View>

          {/* Основной контент */}
          <View style={styles.mainContent}>
            {/* Заголовок и описание */}
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Подтвердите email</Text>
              <Text style={styles.headerDescription}>
                Мы отправили код подтверждения на ваш email.{'\n'}
                Введите его для завершения регистрации
              </Text>
            </View>

            {/* Форма подтверждения */}
            <View style={styles.formContainer}>
              {/* Поле для кода */}
              <Input
                type="base"
                state="active"
                placeholder="Введите код"
                value={code}
                onChangeText={setCode}
                containerStyle={styles.codeInput}
                keyboardType="numeric"
                maxLength={6}
              />

              {/* Подсказка */}
              <Text style={styles.hintText}>
                Код состоит из 6 цифр
              </Text>

              {/* Повторная отправка */}
              <View style={styles.resendContainer}>
                <Text style={styles.resendText}>Не получили код? </Text>
                <TouchableOpacity 
                  onPress={handleResendCode}
                  disabled={isResending}
                >
                  <Text style={[
                    styles.resendLink,
                    isResending && styles.resendLinkDisabled
                  ]}>
                    {isResending ? 'Отправлено' : 'Отправить повторно'}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Таймер */}
              {isResending && (
                <Text style={styles.timerText}>
                  Повторная отправка через 30 секунд
                </Text>
              )}
            </View>
          </View>

          {/* Кнопка подтверждения */}
          <View style={styles.buttonContainer}>
            <Button
              type="primary"
              onPress={handleConfirm}
              disabled={!isCodeValid || isLoading}
              containerStyle={styles.confirmButton}
            >
              {isLoading ? 'Подтверждение...' : 'Подтвердить'}
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFE',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 34,
  },
  topBar: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 55,
    paddingBottom: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 6,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    color: '#1A1A1A',
  },
  title: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.01,
    color: '#1A1A1A',
  },
  badge: {
    backgroundColor: '#EFF3F8',
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#7D8EAA',
  },
  mainContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    gap: 24,
  },
  headerContainer: {
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 8,
  },
  headerTitle: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.01,
    color: '#1A1A1A',
    textAlign: 'center',
  },
  headerDescription: {
    fontFamily: 'Onest',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.01,
    color: '#5A6E8A',
    textAlign: 'center',
  },
  formContainer: {
    gap: 16,
    alignItems: 'center',
  },
  codeInput: {
    width: '100%',
    maxWidth: 200,
    textAlign: 'center',
    fontSize: 24,
    letterSpacing: 8,
  },
  hintText: {
    fontFamily: 'Onest',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#7D8EAA',
    textAlign: 'center',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendText: {
    fontFamily: 'Onest',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#7D8EAA',
  },
  resendLink: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#5A6E8A',
  },
  resendLinkDisabled: {
    color: '#C1C7D0',
  },
  timerText: {
    fontFamily: 'Onest',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#7D8EAA',
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  confirmButton: {
    width: '100%',
  },
});

export default RegistrationConfirmScreen;
