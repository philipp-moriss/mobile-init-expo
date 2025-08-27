import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { Icons16, Icons20, Icons24, Icons32 } from '../../constants/Icons';
import { ClearButtonStyles, InputIconStyles, InputState, InputStyles, InputType, PlaceholderStyles } from '../../constants/Inputs';

interface InputProps extends Omit<TextInputProps, 'style'> {
  state?: InputState;
  type?: InputType;
  icon?: keyof typeof Icons20 | keyof typeof Icons24 | keyof typeof Icons32;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  clearable?: boolean;
  onClear?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({
  state = 'default',
  type = 'base',
  icon,
  placeholder,
  value,
  onChangeText,
  onFocus,
  onBlur,
  clearable = false,
  onClear,
  disabled = false,
  style,
  inputStyle,
  containerStyle,
  secureTextEntry,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  // Определяем состояние Input
  const inputState: InputState = disabled ? 'disabled' : state;
  
  // Получаем стили для выбранного состояния
  const inputStyleFromState = InputStyles[inputState];
  const placeholderStyle = PlaceholderStyles[inputState];
  const iconStyle = InputIconStyles[inputState];
  const clearButtonStyle = ClearButtonStyles[inputState];
  
  // Обработчики событий
  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };
  
  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };
  
  const handleClear = () => {
    onChangeText?.('');
    onClear?.();
  };
  
  // Определяем, нужно ли показывать кнопку очистки
  const shouldShowClear = clearable && value && value.length > 0 && !disabled;
  
  // Безопасная проверка иконки и определение её размера
  const getIconComponent = () => {
    if (!icon) return null;
    
    // Проверяем все размеры иконок
    if (Icons20[icon as keyof typeof Icons20]) {
      return Icons20[icon as keyof typeof Icons20];
    }
    if (Icons24[icon as keyof typeof Icons24]) {
      return Icons24[icon as keyof typeof Icons24];
    }
    if (Icons32[icon as keyof typeof Icons32]) {
      return Icons32[icon as keyof typeof Icons32];
    }
    
    return null;
  };
  
  const IconComponent = getIconComponent();
  
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.inputContainer, inputStyleFromState, style]}>
        {/* Иконка слева */}
        {IconComponent && (
          <View style={styles.iconContainer}>
            <IconComponent style={iconStyle} />
          </View>
        )}
        
        {/* Поле ввода */}
        <TextInput
          style={[
            styles.textInput,
            inputStyleFromState,
            inputStyle,
            // Убираем дублирующиеся стили
            {
              backgroundColor: 'transparent',
              borderWidth: 0,
              paddingVertical: 0,
              paddingHorizontal: 0,
            }
          ]}
          placeholder={placeholder}
          placeholderTextColor={placeholderStyle.color}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
          secureTextEntry={secureTextEntry}
          {...props}
        />
        
        {/* Кнопка очистки справа */}
        {shouldShowClear && (
          <TouchableOpacity
            style={[styles.clearButton, clearButtonStyle]}
            onPress={handleClear}
            activeOpacity={0.7}
          >
            <Icons16.xCircle style={{ color: iconStyle.color, width: 16, height: 16 }} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    minHeight: 56,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    textAlignVertical: 'center',
  },
  clearButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Input;
