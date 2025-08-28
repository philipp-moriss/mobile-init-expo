import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { cityService } from '@/src/services/city.service';
import { ArrowBackIcon } from '@/src/shared/components/icons';
import Button from '@/src/shared/components/ui-kit/button';
import Input from '@/src/shared/components/ui-kit/input';
import { City } from '@/src/types';

const RegistrationCityScreen: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);

  useEffect(() => {
    loadCities();
  }, []);

  const loadCities = async () => {
    try {
      const citiesData = await cityService.getCities();
      setCities(citiesData);
      setFilteredCities(citiesData);
    } catch (error) {
      console.error('Ошибка загрузки городов:', error);
    }
  };

  const handleCitySelect = (city: City) => {
    setSelectedCity(city.name);
    setShowDropdown(false);
  };

  const handleClearCity = () => {
    setSelectedCity('');
  };

  const handleCitySearch = (query: string) => {
    setSelectedCity(query);
    if (query.trim()) {
      const filtered = cities.filter(city =>
        city.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities(cities);
    }
  };

  const handleContinue = () => {
    if (selectedCity) {
      router.push('/registration-role' as any);
    }
  };

  const handleBack = () => {
    router.back();
  };

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
            <Text style={styles.badgeText}>1/3</Text>
          </View>
        </View>

        {/* Основной контент */}
        <View style={styles.mainContent}>
          {/* Заголовок и описание */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Выберите город</Text>
            <Text style={styles.headerDescription}>
              Укажите город, чтобы мы показали свободные причалы поблизости
            </Text>
          </View>

          {/* Выбор города */}
          <View style={styles.citySelectionContainer}>
            {/* Input с выбранным городом */}
            <View style={styles.inputContainer}>
              <Input
                type="base"
                state="active"
                placeholder="Введите название города"
                value={selectedCity}
                onChangeText={handleCitySearch}
                containerStyle={styles.cityInput}
                clearable={true}
                onClear={handleClearCity}
                onFocus={() => setShowDropdown(true)}
              />
            </View>

            {/* Dropdown с городами */}
            {showDropdown && (
              <View style={styles.dropdownContainer}>
                {filteredCities.map((city) => (
                  <TouchableOpacity
                    key={city.id}
                    style={[
                      styles.dropdownItem,
                      city.name === selectedCity && styles.dropdownItemActive
                    ]}
                    onPress={() => handleCitySelect(city)}
                  >
                    <Text style={[
                      styles.dropdownItemText,
                      city.name === selectedCity && styles.dropdownItemTextActive
                    ]}>
                      {city.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        {/* Кнопка продолжить */}
        <View style={styles.buttonContainer}>
          <Button
            type="primary"
            onPress={handleContinue}
            disabled={!selectedCity}
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
  citySelectionContainer: {
    gap: 8,
  },
  inputContainer: {
    position: 'relative',
  },
  cityInput: {
    marginBottom: 0,
  },
  dropdownContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 8,
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 6,
    maxHeight: 200,
  },
  dropdownItem: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#F3F3F3',
    marginBottom: 4,
  },
  dropdownItemActive: {
    backgroundColor: '#EAF0F6',
  },
  dropdownItemText: {
    fontFamily: 'Onest',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.01,
    color: '#1A1A1A',
  },
  dropdownItemTextActive: {
    color: '#1A1A1A',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  continueButton: {
    width: '100%',
  },
});

export default RegistrationCityScreen;

