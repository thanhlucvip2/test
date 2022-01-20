import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import AddNewTask from './components/addNewTask';
import Task from './components/Task';
import {Data} from './redux/model';

interface Props {
  data: Data[];
}
const App = (props: Props) => {
  const {data} = props;

  return (
    <View>
      <AddNewTask />
      <Task data={data} />
    </View>
  );
};
export interface State {
  ListName: Data[];
}
const stateToData = (state: State) => {
  return {
    data: state.ListName,
  };
};
export default connect(stateToData, null)(App);
