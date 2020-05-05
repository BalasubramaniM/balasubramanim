import { OPEN_MOBILE_HEADER } from './actions';

const INITIAL_STATE = {
  openMobileHeader: false,
};

const openMobileHeaderReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case OPEN_MOBILE_HEADER:
    return {
      ...state,
      openMobileHeader: action.value
    }
  default: return state;
  }
}

export default openMobileHeaderReducer;
