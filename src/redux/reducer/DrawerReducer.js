/**
 * Created by lihao on 2017/10/3.
 */
import {handleActions} from 'redux-actions';

const initialState = {
    drawerOpen: false
};

const drawerReducer = handleActions({
    openDrawer: (state, action) => {
        return {
            ...state,
            drawerOpen: true
        }
    },
    closeDrawer: (state, action) => {
        return {
            ...state,
            drawerOpen: false
        }
    }
}, initialState);

export default drawerReducer;
