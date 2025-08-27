import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { ButtonSize, ButtonState, ButtonStyles, ButtonType } from '../../constants/Buttons';
import { Icons20, Icons24 } from '../../constants/Icons';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  type?: ButtonType;
  state?: ButtonState;
  size?: ButtonSize;
  icon?: keyof typeof Icons24 | keyof typeof Icons20;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
    children,
  onPress,
  type = 'primary',
  state = 'default',
  size = 'base',
  icon,
  iconPosition = 'left',
  disabled = false,
    style,
  containerStyle,
  textStyle,
}) => {
  // Получаем стили для выбранного типа и состояния
  let buttonStyle;
  
  if (type === 'text') {
    // Для Text кнопок используем size как состояние
    buttonStyle = ButtonStyles.text[size as keyof typeof ButtonStyles.text];
  } else {
    // Для остальных кнопок определяем состояние
    const buttonState: ButtonState = disabled ? 'disabled' : state;
    buttonStyle = ButtonStyles[type][buttonState];
  }
  
  // Создаем стили для кнопки
  const buttonStyles = [
    styles.base,
    {
      ...buttonStyle,
      paddingVertical: buttonStyle.paddingVertical || 16,
      paddingHorizontal: buttonStyle.paddingHorizontal || 16,
      borderRadius: buttonStyle.borderRadius || 16,
    },
    containerStyle || style,
  ];
  
  // Создаем стили для текста
  const textStyles = [
    styles.text,
    {
      color: buttonStyle.color,
      fontSize: buttonStyle.fontSize || 16,
      lineHeight: buttonStyle.lineHeight || 24,
      fontWeight: buttonStyle.fontWeight || '600',
      fontFamily: buttonStyle.fontFamily || 'Onest',
    },
    textStyle,
  ];

  // Функция для рендера иконки
  const renderIcon = (position: 'left' | 'right') => {
    if (!icon || iconPosition !== position) return null;
    
    if (size === 'small') {
      // Проверяем, есть ли иконка в Icons20
      if (icon in Icons20) {
        const IconComponent = Icons20[icon as keyof typeof Icons20];
        return IconComponent;
      }
    } else {
      // Проверяем, есть ли иконка в Icons24
      if (icon in Icons24) {
        const IconComponent = Icons24[icon as keyof typeof Icons24];
        return IconComponent;
      }
    }
    
    return null;
  };

        return (
            <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
                disabled={disabled}
      activeOpacity={0.8}
    >
      {renderIcon('left')}
      
      {typeof children === 'string' ? (
        <Text style={textStyles}>{children}</Text>
      ) : (
        children
      )}
      
      {renderIcon('right')}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  text: {
    textAlign: 'center',
  },
});

export default Button;
