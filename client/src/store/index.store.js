import {configureStore} from '@reduxjs/toolkit';
//... slices
import userReducer from './slices/user.slice';
import menuReducer from './slices/menu.slice';
import classesReducer from './slices/classes.slice';
import monstersReducer from './slices/monsters.slice';
import ecosystemReducer from './slices/ecosystem.slice';
import raceReducer from './slices/race.slice';
import spellsReducer from './slices/spells.slice';
import postReducer from './slices/post.slice';
import categoriesReducer from './slices/categories.slice';

const store = configureStore({
    reducer: {
        user: userReducer,
        menu: menuReducer,
        classes: classesReducer,
        monsters: monstersReducer,
        ecosystem: ecosystemReducer,
        race: raceReducer,
        spell: spellsReducer,
        post: postReducer,
        categories: categoriesReducer
        // autre reducer ..
    }
});

export default store;