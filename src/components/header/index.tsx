import React from 'react';
import {Animated, Text, useColorScheme} from 'react-native';

interface HeaderProps {
  animatedValue: Animated.Value;
  title: string;
}

const Header = (props: HeaderProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: 40,
        backgroundColor: 'lightblue',
      }}>
      <Text style={{textAlign: 'center', fontSize: 30}}>{props.title}</Text>
    </Animated.View>
  );
};

export default Header;
