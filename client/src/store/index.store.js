import {configureStore} from '@reduxjs/toolkit';
//... slices
import userReducer from './slices/user.slice';
import menuReducer from './slices/menu.slice';
import classesReducer from './slices/classes.slice';
import monstersReducer from './slices/monsters.slice';
import ecosystemReducer from './slices/ecosystem.slice';
import raceReducer from './slices/race.slice';

const store = configureStore({
    reducer: {
        user: userReducer,
        menu: menuReducer,
        classes: classesReducer,
        monsters: monstersReducer,
        ecosystem: ecosystemReducer,
        race: raceReducer,
        // autre reducer ..
    }
});

export default store;