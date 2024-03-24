import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {homeON, transaksiON, homeOFF, transaksiOFF} from '../../../assets/icon';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <Image source={homeON} /> : <Image source={homeOFF} />;
    case 'Transaksi':
      return focus ? (
        <Image source={transaksiON} />
      ) : (
        <Image source={transaksiOFF} />
      );
  }
};

const createBottomTabNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default createBottomTabNavigator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#010101',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
});
