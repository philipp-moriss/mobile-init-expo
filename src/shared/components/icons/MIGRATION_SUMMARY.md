# Отчет о миграции иконок

## Выполнено

✅ **Создано 48 компонентов иконок** на основе SVG файлов из Figma
✅ **Заменены импорты** в основных экранах:
- SearchScreen: `Icons16.arrowBack` → `ArrowBackIcon`, `Icons20.search` → `SearchIcon`
- ProfileScreen: `Icons24.*` → соответствующие компоненты, `Icons16.arrowBack` → `ArrowBackIcon`
- RegistrationDataScreen: `Icons16.arrowBack` → `ArrowBackIcon`
- RegistrationCityScreen: `Icons16.arrowBack` → `ArrowBackIcon`
- RegistrationConfirmScreen: `Icons16.arrowBack` → `ArrowBackIcon`

✅ **Заменены импорты** в UI компонентах:
- club-card: `Icons20.heart` → `HeartIcon`
- code-field: `Icons16.warning` → `WarningIcon`
- tab-bar: `Icons24.*` → соответствующие компоненты
- badge: `Icons16.*` → соответствующие компоненты

## Особенности новой системы иконок

- **Единообразный API**: все иконки используют `SvgXml` компонент
- **Динамические цвета**: `fill="currentColor"` позволяет менять цвет через CSS
- **Сохранены эффекты**: SVG фильтры (тени, размытие) из Figma
- **TypeScript поддержка**: полная типизация для всех компонентов
- **Гибкость**: поддержка всех стандартных пропсов React Native

## Использование

```tsx
import { ShipIcon, HeartIcon, SearchIcon } from '../shared/components/icons';

// Базовое использование
<ShipIcon width={24} height={24} />

// С изменением цвета
<HeartIcon width={20} height={20} color="red" />

// С дополнительными пропсами
<SearchIcon 
  width={32} 
  height={32} 
  color="#007AFF"
  style={{ marginRight: 8 }}
/>
```

## Следующие шаги

1. Завершить замену в оставшихся UI компонентах
2. Обновить типы для компонентов, использующих старые иконки
3. Удалить неиспользуемые импорты старых иконок
4. Протестировать все экраны с новыми иконками
