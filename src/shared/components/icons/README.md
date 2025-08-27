# Иконки

Все иконки созданы на основе SVG файлов из Figma и используют `SvgXml` компонент.

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

## Доступные иконки

### Основные иконки
- `ShipIcon` - иконка корабля
- `TelegramIcon` - иконка Telegram
- `VkIcon` - иконка VK
- `HeartIcon` - иконка сердца
- `SearchIcon` - иконка поиска
- `UserIcon` - иконка пользователя
- `ArrowBackIcon` - иконка стрелки назад
- `CalendarIcon` - иконка календаря
- `NotificationIcon` - иконка уведомлений
- `EditIcon` - иконка редактирования
- `PhoneIcon` - иконка телефона
- `InfoIcon` - иконка информации
- `CleanIcon` - иконка очистки
- `ResetIcon` - иконка сброса
- `ReadAllIcon` - иконка "прочитано"
- `MapPointIcon` - иконка точки на карте
- `AnchorIcon` - иконка якоря
- `WidgetIcon` - иконка виджета
- `ScaleMaxIcon` - иконка максимального масштаба
- `ScaleMinIcon` - иконка минимального масштаба
- `DocumentIcon` - иконка документа
- `PassportIcon` - иконка паспорта
- `VerifiedIcon` - иконка верификации
- `CheckReadIcon` - иконка проверки
- `DotActiveIcon` - активная точка
- `DotDefaultIcon` - обычная точка
- `TagDefaultIcon` - обычный тег
- `TagPressIcon` - нажатый тег
- `ViewButtonIcon` - кнопка просмотра
- `TextButtonBaseIcon` - базовая текстовая кнопка
- `TextButtonSmallIcon` - маленькая текстовая кнопка
- `TextButtonWithIconIcon` - текстовая кнопка с иконкой
- `BadgeNoneIcon` - бейдж без значения
- `Badge2To9Icon` - бейдж 2-9
- `Badge10To99Icon` - бейдж 10-99
- `BadgeRadiusIcon` - бейдж радиуса
- `BadgePlacesIcon` - бейдж мест
- `XCircle16Icon` - крестик в круге 16px
- `XCircle20Icon` - крестик в круге 20px
- `WarningIcon` - иконка предупреждения
- `CloseLineIcon` - иконка закрытия
- `Heart20Icon` - иконка сердца 20px
- `Phone20Icon` - иконка телефона 20px
- `Search20Icon` - иконка поиска 20px
- `Anchor16Icon` - иконка якоря 16px

## Особенности

- Все иконки используют `fill="currentColor"` для динамического изменения цвета
- Поддерживают все стандартные пропсы `SvgXml`
- Сохраняют оригинальные размеры и пропорции из Figma
- Включают SVG фильтры для эффектов (тени, размытие)
