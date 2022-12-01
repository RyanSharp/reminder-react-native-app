import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {RectButton, Swipeable} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {convertToReadableDate, getPureDate} from '../../utils/dateUtils';

interface AppListItemProps {
  dueDate?: number;
  name: string;
  completeTrigger?: Function;
}

const AppListItem = (props: AppListItemProps) => {
  const swipeableRef = useRef(null);

  const renderRightButtons = (_: any, dragX: any) => {
    return [
      <RectButton
        key="complete-action"
        style={{backgroundColor: 'blue'}}
        onPress={() => {
          swipeableRef.current.close();
          props.completeTrigger();
        }}>
        <Animated.View>
          <Icon
            name="check"
            size={30}
            color="white"
            style={styles.actionButton}
          />
        </Animated.View>
      </RectButton>,
      <RectButton style={{backgroundColor: 'gray'}}>
        <Animated.View>
          <Icon
            name="edit"
            size={30}
            color="white"
            style={styles.actionButton}
          />
        </Animated.View>
      </RectButton>,
    ];
  };

  return (
    <Swipeable
      key="edit-action"
      ref={swipeableRef}
      renderRightActions={renderRightButtons}
      overshootRight={false}>
      <View style={styles.rowContainer}>
        <Text numberOfLines={1} style={styles.rowPrimaryText}>
          {props.name}
        </Text>
        <Text>Due: {convertToReadableDate(props.dueDate)}</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    padding: 5,
  },
  rowPrimaryText: {
    fontSize: 24,
  },
  actionButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default AppListItem;
