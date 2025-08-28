import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnchorIcon, ArrowBackIcon, ShipIcon } from '@/src/shared/components/icons';
import Button from '@/src/shared/components/ui-kit/button';

const RegistrationRoleScreen: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'shipowner' | 'yachtclub'>('shipowner');

  const handleContinue = () => {
    if (selectedRole) {
      router.push('/registration-profile' as any);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const roles = [
    {
      id: 'shipowner' as const,
      title: 'Судовладелец',
      description: 'Хочу бронировать места в клубах',
      icon: ShipIcon,
      active: selectedRole === 'shipowner',
    },
    {
      id: 'yachtclub' as const,
      title: 'Свой яхт-клуб',
      description: 'Хочу продавать услуги',
      icon: AnchorIcon,
      active: selectedRole === 'yachtclub',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
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
            <Text style={styles.badgeText}>2/3</Text>
          </View>
        </View>

        {/* Основной контент */}
        <View style={styles.mainContent}>
          {/* Заголовок и описание */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>
              Вы судовладелец{'\n'}или у вас свой яхт-клуб?
            </Text>
            <Text style={styles.headerDescription}>
              Расскажите, как вы планируете пользоваться сервисом
            </Text>
          </View>

          {/* Выбор роли */}
          <View style={styles.roleSelectionContainer}>
            {roles.map((role) => (
              <TouchableOpacity
                key={role.id}
                style={[
                  styles.roleOption,
                  role.active && styles.roleOptionActive
                ]}
                onPress={() => setSelectedRole(role.id)}
              >
                {/* Иконка роли */}
                <View style={[
                  styles.roleIconContainer,
                  role.active && styles.roleIconContainerActive
                ]}>
                  <role.icon 
                    width={24} 
                    height={24} 
                    color={role.active ? '#FFFFFF' : '#A1B0CA'} 
                  />
                </View>

                {/* Текст роли */}
                <View style={styles.roleContent}>
                  <Text style={[
                    styles.roleTitle,
                    role.active && styles.roleTitleActive
                  ]}>
                    {role.title}
                  </Text>
                  <Text style={[
                    styles.roleDescription,
                    role.active && styles.roleDescriptionActive
                  ]}>
                    {role.description}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Кнопка продолжить */}
        <View style={styles.buttonContainer}>
          <Button
            type="primary"
            onPress={handleContinue}
            disabled={!selectedRole}
            containerStyle={styles.continueButton}
          >
            Продолжить
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFE',
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
  roleSelectionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 8,
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 6,
    gap: 4,
  },
  roleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#F3F3F3',
  },
  roleOptionActive: {
    backgroundColor: '#EAF0F6',
  },
  roleIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 100,
    backgroundColor: 'rgba(25, 167, 233, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  roleIconContainerActive: {
    backgroundColor: '#15CDCA',
  },
  roleContent: {
    flex: 1,
    gap: 4,
  },
  roleTitle: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#A1B0CA',
  },
  roleTitleActive: {
    color: '#1A1A1A',
  },
  roleDescription: {
    fontFamily: 'Onest',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#A1B0CA',
  },
  roleDescriptionActive: {
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

export default RegistrationRoleScreen;

