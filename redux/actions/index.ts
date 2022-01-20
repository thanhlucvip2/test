import * as Types from '../constants/index';
export const NewTask = (newTask: string) => {
  return {
    type: Types.ADD_TASK,
    name: newTask,
  };
};
export const ToggleStatus = (id: number) => {
  return {
    type: Types.TOGGLE_STATUS,
    id: id,
  };
};
