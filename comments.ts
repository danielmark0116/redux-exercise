import { NEW_COMMENT, EDIT_COMMENT, DELETE_COMMENT, RATE } from './actionTypes';

interface IAction {
  type: string;
  payload?: any;
  rateValue?: 1 | 0;
  id?: string;
}

export default function comments(state = [], action: IAction) {
  switch (action.type) {
    case NEW_COMMENT:
      return [
        ...state,
        { id: action.id, text: action.payload, votes: action.rateValue }
      ];

    case DELETE_COMMENT:
      return [...state, state.filter(comm => comm.id !== action.id)];
    case EDIT_COMMENT:
      state.map((comm, i) => {
        if (comm.id === action.id) {
          return { ...comm, text: action.payload };
        } else {
          return comm;
        }
      });
    case RATE:
      if (action.rateValue === 0) {
        state.map(comm => {
          if (comm.id === action.id) {
            return { ...comm, votes: comm.votes - 1 };
          } else {
            return comm;
          }
        });
      } else if (action.rateValue === 1) {
        state.map(comm => {
          if (comm.id === action.id) {
            return { ...comm, votes: comm.votes + 1 };
          } else {
            return comm;
          }
        });
      }
      break;
    default:
      return state;
  }
  return state;
}
