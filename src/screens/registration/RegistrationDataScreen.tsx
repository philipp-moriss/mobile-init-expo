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

import Button from '@components/ui-kit/button';
import Input from '@components/ui-kit/input';
import { Icons16 } from '@constants/Icons';

const RegistrationDataScreen: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'user' | 'admin' | 'shipowner'>('user');

  const handleContinue = () => {
    if (firstName && lastName && email && password && confirmPassword && password === confirmPassword) {
      router.push('/registration-confirm' as any);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const isFormValid = firstName && lastName && email && password && confirmPassword && password === confirmPassword;

  const roles = [
    { id: 'user', title: 'Пользователь', description: 'Поиск и бронирование причалов' },
    { id: 'admin', title: 'Администратор', description: 'Управление клубом и причалами' },
    { id: 'shipowner', title: 'Судовладелец', description: 'Управление судами и услугами' },
  ];

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
              <Icons16.arrowBack style={styles.backIcon} />
            </TouchableOpacity>
            
            <Text style={styles.title}>Регистрация</Text>
            
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2/3</Text>
            </View>
          </View>

          {/* Основной контент */}
          <View style={styles.mainContent}>
            {/* Заголовок и описание */}
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Введите данные</Text>
              <Text style={styles.headerDescription}>
                Укажите ваши личные данные для создания аккаунта
              </Text>
            </View>

            {/* Форма */}
            <View style={styles.formContainer}>
              {/* Имя */}
              <Input
                type="base"
                state="default"
                placeholder="Имя"
                value={firstName}
                onChangeText={setFirstName}
                containerStyle={styles.inputContainer}
              />

              {/* Фамилия */}
              <Input
                type="base"
                state="default"
                placeholder="Фамилия"
                value={lastName}
                onChangeText={setLastName}
                containerStyle={styles.inputContainer}
              />

              {/* Email */}
              <Input
                type="mail"
                state="default"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                containerStyle={styles.inputContainer}
              />

              {/* Пароль */}
              <Input
                type="base"
                state="default"
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                containerStyle={styles.inputContainer}
              />

              {/* Подтверждение пароля */}
              <Input
                type="base"
                state="default"
                placeholder="Подтвердите пароль"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                containerStyle={styles.inputContainer}
              />

              {/* Выбор роли */}
              <View style={styles.roleContainer}>
                <Text style={styles.roleTitle}>Выберите роль</Text>
                <View style={styles.roleOptions}>
                  {roles.map((roleOption) => (
                    <TouchableOpacity
                      key={roleOption.id}
                      style={[
                        styles.roleOption,
                        role === roleOption.id && styles.roleOptionActive
                      ]}
                      onPress={() => setRole(roleOption.id as any)}
                    >
                      <View style={styles.roleContent}>
                        <Text style={[
                          styles.roleOptionTitle,
                          role === roleOption.id && styles.roleOptionTitleActive
                        ]}>
                          {roleOption.title}
                        </Text>
                        <Text style={[
                          styles.roleOptionDescription,
                          role === roleOption.id && styles.roleOptionDescriptionActive
                        ]}>
                          {roleOption.description}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {/* Кнопка продолжить */}
          <View style={styles.buttonContainer}>
            <Button
              type="primary"
              onPress={handleContinue}
              disabled={!isFormValid}
              containerStyle={styles.continueButton}
            >
              Продолжить
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
  },
  inputContainer: {
    marginBottom: 0,
  },
  roleContainer: {
    gap: 16,
  },
  roleTitle: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#1A1A1A',
  },
  roleOptions: {
    gap: 12,
  },
  roleOption: {
    backgroundColor: '#F3F3F3',
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  roleOptionActive: {
    backgroundColor: '#EAF0F6',
    borderColor: '#5A6E8A',
  },
  roleContent: {
    gap: 4,
  },
  roleOptionTitle: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#5A6E8A',
  },
  roleOptionTitleActive: {
    color: '#1A1A1A',
  },
  roleOptionDescription: {
    fontFamily: 'Onest',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#7D8EAA',
  },
  roleOptionDescriptionActive: {
    color: '#5A6E8A',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  continueButton: {
    width: '100%',
  },
});

export default RegistrationDataScreen;
