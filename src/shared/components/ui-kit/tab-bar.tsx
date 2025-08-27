import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle
} from 'react-native';

import { Icons24 } from '@constants/Icons';
import {
    TabBarContainerStyles,
    TabBarIconStyles,
    TabBarItemStyles,
    TabBarState,
    TabBarTextStyles,
} from '@constants/TabBars';

interface TabBarItem {
  id: string;
  title: string;
  icon: keyof typeof Icons24;
  state?: TabBarState;
}

interface TabBarProps {
  items: TabBarItem[];
  activeTabId?: string;
  onTabPress?: (tabId: string) => void;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
}

const TabBar: React.FC<TabBarProps> = ({
  items,
  activeTabId,
  onTabPress,
  style,
  containerStyle,
}) => {
  const handleTabPress = (tabId: string) => {
    onTabPress?.(tabId);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.tabBar, TabBarContainerStyles.default, style]}>
        {items.map((item) => {
          const isActive = item.id === activeTabId;
          const tabState: TabBarState = isActive ? 'active' : 'default';
          
          const IconComponent = Icons24[item.icon];
          const itemStyle = TabBarItemStyles[tabState];
          const iconStyle = TabBarIconStyles[tabState];
          const textStyle = TabBarTextStyles[tabState];

          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.tabItem, itemStyle]}
              onPress={() => handleTabPress(item.id)}
              activeOpacity={0.7}
            >
              <IconComponent style={iconStyle} />
              <Text style={[styles.tabText, textStyle]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    textAlign: 'center',
  },
});

export default TabBar;
