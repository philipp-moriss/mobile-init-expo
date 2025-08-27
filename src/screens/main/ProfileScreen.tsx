import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuthStore } from '@/src/stores/auth.store';
import { Icons16, Icons24 } from '@constants/Icons';

const ProfileScreen: React.FC = () => {
  const { user, logout } = useAuthStore();

  const handleBack = () => {
    console.log('Назад');
  };

  const handleLogout = async () => {
    try {
      await logout();
      console.log('Выход выполнен');
    } catch (error) {
      console.error('Ошибка выхода:', error);
    }
  };

  const menuItems = [
    { icon: Icons24.user, title: 'Персональные данные', onPress: () => console.log('Персональные данные') },
    { icon: Icons24.calendar, title: 'Мои брони', onPress: () => console.log('Мои брони') },
    { icon: Icons24.heart, title: 'Избранное', onPress: () => console.log('Избранное') },
    { icon: Icons24.notification, title: 'Уведомления', onPress: () => console.log('Уведомления') },
    { icon: Icons24.ship, title: 'Мои суда', onPress: () => console.log('Мои суда') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Icons16.arrowBack style={styles.backIcon} />
          </TouchableOpacity>
          
          <Text style={styles.title}>Профиль</Text>
        </View>

        {/* Информация о пользователе */}
        <View style={styles.userInfoContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {user?.firstName?.charAt(0) || 'П'}
              </Text>
            </View>
          </View>
          
          <View style={styles.userDetails}>
            <Text style={styles.userName}>
              {user?.firstName} {user?.lastName}
            </Text>
            <Text style={styles.userEmail}>{user?.email}</Text>
            <Text style={styles.userRole}>
              {user?.role === 'admin' ? 'Администратор' : 
               user?.role === 'shipowner' ? 'Судовладелец' : 'Пользователь'}
            </Text>
          </View>
        </View>

        {/* Меню */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={item.onPress}
            >
              <View style={styles.menuItemContent}>
                <item.icon style={styles.menuIcon} />
                <Text style={styles.menuTitle}>{item.title}</Text>
              </View>
              <Icons16.arrowBack style={styles.arrowIcon} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Кнопка выхода */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Выйти</Text>
          </TouchableOpacity>
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
    paddingBottom: 34,
  },
  header: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
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
    marginRight: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
    color: '#1A1A1A',
  },
  title: {
    fontFamily: 'Onest',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    color: '#1A1A1A',
  },
  userInfoContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 24,
    padding: 24,
    borderRadius: 24,
    alignItems: 'center',
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 6,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: '#EAF0F6',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontFamily: 'Onest',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 40,
    color: '#5A6E8A',
  },
  userDetails: {
    alignItems: 'center',
  },
  userName: {
    fontFamily: 'Onest',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  userEmail: {
    fontFamily: 'Onest',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#5A6E8A',
    marginBottom: 8,
  },
  userRole: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#7D8EAA',
    backgroundColor: '#EFF3F8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 24,
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 6,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuIcon: {
    width: 24,
    height: 24,
    color: '#5A6E8A',
  },
  menuTitle: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#1A1A1A',
  },
  arrowIcon: {
    width: 16,
    height: 16,
    color: '#5A6E8A',
    transform: [{ rotate: '180deg' }],
  },
  logoutContainer: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  logoutText: {
    fontFamily: 'Onest',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
});

export default ProfileScreen;

