// Сервис для работы с городами
import { City } from '../types';

class CityService {
  private cities: City[] = [
    { id: '1', name: 'Санкт-Петербург', region: 'Северо-Западный' },
    { id: '2', name: 'Саратов', region: 'Приволжский' },
    { id: '3', name: 'Саранск', region: 'Приволжский' },
    { id: '4', name: 'Самара', region: 'Приволжский' },
    { id: '5', name: 'Москва', region: 'Центральный' },
    { id: '6', name: 'Новосибирск', region: 'Сибирский' },
    { id: '7', name: 'Екатеринбург', region: 'Уральский' },
    { id: '8', name: 'Казань', region: 'Приволжский' },
  ];

  async getCities(): Promise<City[]> {
    // Заглушка для демонстрации
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.cities), 500);
    });
  }

  async searchCities(query: string): Promise<City[]> {
    const filtered = this.cities.filter(city =>
      city.name.toLowerCase().includes(query.toLowerCase())
    );
    return new Promise((resolve) => {
      setTimeout(() => resolve(filtered), 300);
    });
  }

  async getCityById(id: string): Promise<City | null> {
    const city = this.cities.find(c => c.id === id);
    return new Promise((resolve) => {
      setTimeout(() => resolve(city || null), 200);
    });
  }
}

export const cityService = new CityService();

