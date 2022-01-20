import React from 'react';
import {View} from 'react-native';
import {Data} from '../redux/model';
import DetailTask from './detailTask';
interface Props {
  data: Data[];
}
interface State {}
class Task extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <View>
        {this.props.data.map((res: Data, index: number) => {
          return (
            <DetailTask
              key={index}
              id={res.id}
              name={res.name}
              status={res.status}
            />
          );
        })}
      </View>
    );
  }
}
export default Task;
