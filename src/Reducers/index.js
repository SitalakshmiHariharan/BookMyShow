import {combineReducers} from 'redux';
import SliderReducer from './SliderReducer';
import RecomReducer from './RecomReducer';
import EventsReducer from './EventsReducer';
import UpcomingReducer from './UpcomingReducer';
import LatestReducer from './LatestReducer';

const rootReducer = combineReducers({
    SliderReducer,RecomReducer,EventsReducer,UpcomingReducer,LatestReducer
})

export default rootReducer;