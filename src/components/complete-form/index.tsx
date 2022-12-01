import React from 'react';
import {Button, Modal, Text, View} from 'react-native';

interface CompleteTaskForm {
  item: any;
  closeModal: Function;
}

const CompleteTaskForm = (props: CompleteTaskForm) => {
  return (
    <Modal animationType="slide" visible={props.item !== undefined}>
      {props.item !== undefined ? (
        <View>
          <Text>{props.item.name}</Text>
          <View>
            <Button title="Close" onPress={props.closeModal} />
          </View>
        </View>
      ) : null}
    </Modal>
  );
};

export default CompleteTaskForm;
