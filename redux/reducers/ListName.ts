import {Data} from '../model/index';
import * as Types from '../constants/index';
interface actionType {
  type: string;
  name: string;
  id: number;
}
const data: Data[] = [
  {name: 'dasdasdas', id: 1, status: false},
  {name: 'dasd', id: 2, status: true},
  {name: 'dasdas', id: 3, status: true},
];

const ListName = (state = data, action: actionType) => {
  switch (action.type) {
    case Types.ADD_TASK:
      const newState = [
        ...state,
        {
          name: action.name,
          id: Math.floor(Math.random() * 1000),
          status: false,
        },
      ];
      return newState;
    case Types.TOGGLE_STATUS:
      const Index = state.findIndex(a => {
        return a.id === action.id;
      });
      state[Index].status = !state[Index].status;
      return [...state];
    default:
      return state;
  }
};
export default ListName;
