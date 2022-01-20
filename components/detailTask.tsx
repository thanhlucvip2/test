import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import * as action from '../redux/actions/index';
interface Props {
  id: number;
  name: string;
  status: boolean;
  setStatus: Function;
}
interface State {}
class DetailTask extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <TouchableOpacity onPress={() => this.props.setStatus(this.props.id)}>
        <View style={Style.container}>
          <Text
            style={[Style.listTask, this.props.status ? Style.colorRed : {}]}>
            {this.props.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const Style = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listTask: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    marginVertical: 10,
    textAlign: 'center',
  },
  colorRed: {
    color: 'red',
  },
});
const setStatusStore = (dispatch: Function) => {
  return {
    setStatus: (id: number) => {
      dispatch(action.ToggleStatus(id));
    },
  };
};
export default connect(null, setStatusStore)(DetailTask);
