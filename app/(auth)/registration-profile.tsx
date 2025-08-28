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

import { ArrowBackIcon } from '@/src/shared/components/icons';
import Button from '@/src/shared/components/ui-kit/button';
import Input from '@/src/shared/components/ui-kit/input';

const RegistrationProfileScreen: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  const handleComplete = () => {
    if (firstName && lastName && email && phone) {
      // Здесь можно добавить логику сохранения данных
      router.replace('/home' as any);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const isFormValid = firstName && lastName && email && phone;

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
              <Text style={styles.headerTitle}>Заполните профиль</Text>
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

              {/* Телефон */}
              <Input
                type="base"
                state="default"
                placeholder="Телефон"
                value={phone}
                onChangeText={setPhone}
                containerStyle={styles.inputContainer}
                keyboardType="phone-pad"
              />

              {/* Компания (опционально) */}
              <Input
                type="base"
                state="default"
                placeholder="Название компании (необязательно)"
                value={company}
                onChangeText={setCompany}
                containerStyle={styles.inputContainer}
              />
            </View>
          </View>

          {/* Кнопка завершения */}
          <View style={styles.buttonContainer}>
            <Button
              type="primary"
              onPress={handleComplete}
              disabled={!isFormValid}
              containerStyle={styles.completeButton}
            >
              Готово
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
  buttonContainer: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  completeButton: {
    width: '100%',
  },
});

export default RegistrationProfileScreen;

