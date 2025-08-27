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
    NotificationBadgeStyles,
    TabDescriptionStyles,
    TabIconStyles,
    TabItemStyles,
    TabsContainerStyles,
    TabState,
    TabTextStyles,
    TabType,
} from '@constants/Tabs';

interface TabItem {
  id: string;
  title: string;
  description?: string;
  icon?: keyof typeof Icons24;
  state?: TabState;
  notificationCount?: number;
}

interface TabsProps {
  type?: TabType;
  items: TabItem[];
  activeTabId?: string;
  onTabPress?: (tabId: string) => void;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
}

const Tabs: React.FC<TabsProps> = ({
  type = 'type1',
  items,
  activeTabId,
  onTabPress,
  style,
  containerStyle,
}) => {
  const handleTabPress = (tabId: string) => {
    onTabPress?.(tabId);
  };

  const getTabState = (item: TabItem): TabState => {
    if (item.state) return item.state;
    if (item.id === activeTabId) return 'active';
    return 'default';
  };

  const renderTabIcon = (item: TabItem, tabState: TabState) => {
    if (!item.icon) return null;

    const IconComponent = Icons24[item.icon];
    const iconStyle = TabIconStyles[tabState];

    return (
      <View style={[styles.iconContainer, iconStyle]}>
        <IconComponent style={styles.icon} />
      </View>
    );
  };

  const renderNotificationBadge = (item: TabItem) => {
    if (!item.notificationCount) return null;

    return (
      <View style={styles.notificationBadge}>
        <Text style={styles.notificationText}>
          {item.notificationCount > 99 ? '99+' : item.notificationCount}
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.tabsContainer, TabsContainerStyles[type], style]}>
        {items.map((item) => {
          const tabState = getTabState(item);
          const tabItemStyle = TabItemStyles[tabState];
          const tabTextStyle = TabTextStyles[tabState];
          const tabDescriptionStyle = TabDescriptionStyles[tabState];

          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.tabItem, tabItemStyle]}
              onPress={() => handleTabPress(item.id)}
              activeOpacity={0.7}
            >
              {/* Иконка */}
              {renderTabIcon(item, tabState)}
              
              {/* Текст и описание */}
              <View style={styles.textContainer}>
                <Text style={[styles.tabTitle, tabTextStyle]}>
                  {item.title}
                </Text>
                {item.description && (
                  <Text style={[styles.tabDescription, tabDescriptionStyle]}>
                    {item.description}
                  </Text>
                )}
              </View>
              
              {/* Notification badge */}
              {renderNotificationBadge(item)}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  tabsContainer: {
    alignItems: 'stretch',
  },
  tabItem: {
    flex: 1,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    color: '#A1B0CA', // Цвет иконки по умолчанию
  },
  textContainer: {
    alignItems: 'center',
    gap: 4,
  },
  tabTitle: {
    textAlign: 'center',
  },
  tabDescription: {
    textAlign: 'center',
  },
  notificationBadge: {
    ...NotificationBadgeStyles.default,
    position: 'absolute',
    top: 8,
    right: 8,
  },
  notificationText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
  },
});

export default Tabs;
