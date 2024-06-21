import {
  FETCH_EVENTS,
  UPDATE_CURRENT_TIME,
  SEEK_TO,
  SET_EVENTS,
} from './actions';

interface State {
  currentTime: number;
  events: Event[]; // Теперь тип элементов массива уточнен
}

interface Action {
  type: string;
  payload: Event[]; // Уточните тип payload, если это возможно
}

const initialState: State = {
  currentTime: 0,
  events: [],
};

const rootReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case FETCH_EVENTS:
      return { ...state, events: action.payload };
    case SET_EVENTS:
      return { ...state, events: action.payload };
    case UPDATE_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    case SEEK_TO:
      return { ...state, currentTime: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;