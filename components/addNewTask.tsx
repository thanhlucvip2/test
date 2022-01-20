import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import * as action from '../redux/actions/index';
import {connect} from 'react-redux';
interface Props {
  addTask: Function;
}
function AddNewTask(props: Props) {
  const {addTask} = props;
  const [input, setInput] = React.useState('');
  return (
    <View style={Styles.container}>
      <TextInput style={Styles.input} onChangeText={text => setInput(text)} />
      <Button title="Add" onPress={() => addTask(input)} />
    </View>
  );
}
const Styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
  },
  container: {
    marginVertical: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const addNewTaskStore = (dispatch: Function) => {
  return {
    addTask: (text: string) => {
      dispatch(action.NewTask(text));
    },
  };
};

export default connect(null, addNewTaskStore)(AddNewTask);
