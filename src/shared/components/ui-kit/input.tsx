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
import { useTheme } from '../../use-theme';

interface InputProps extends Omit<TextInputProps, 'style'> {
  state?: 'default' | 'error' | 'success' | 'disabled';
  type?: 'base' | 'search';
  icon?: string;
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
  const { colors, fonts, weights, sizes } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  
  // Определяем состояние Input
  const inputState = disabled ? 'disabled' : state;
  
  // Получаем стили для выбранного состояния из темы
  const getInputStyle = () => {
    if (inputState === 'disabled') {
      return {
        backgroundColor: colors.grey100,
        borderColor: colors.grey200,
        color: colors.grey500,
      };
    }
    if (inputState === 'error') {
      return {
        backgroundColor: colors.white,
        borderColor: colors.red,
        color: colors.black,
      };
    }
    return {
      backgroundColor: colors.white,
      borderColor: isFocused ? colors.primary500 : colors.grey200,
      color: colors.black,
    };
  };
  
  const inputStyleFromState = getInputStyle();
  
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
  
  // Простой рендер иконки (пока без компонентов)
  const IconComponent = null;
  
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.inputContainer, inputStyleFromState, style]}>
        {/* Иконка слева */}
        {icon && (
          <View style={styles.iconContainer}>
            {/* Иконка пока не реализована */}
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
          placeholderTextColor={colors.grey500}
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
            style={[styles.clearButton]}
            onPress={handleClear}
            activeOpacity={0.7}
          >
            {/* Иконка очистки пока не реализована */}
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
