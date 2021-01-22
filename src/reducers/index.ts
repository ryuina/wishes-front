import { combineReducers } from 'redux';
import header, { HeaderState } from './header';

export interface RootState {
  header: HeaderState;
}

const rootReducer = combineReducers<RootState>({
  header
});

export default rootReducer;