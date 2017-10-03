/**
 * Created by lihao on 2017/10/3.
 */
import {createActions, createAction} from 'redux-actions';

/*export const { openDrawer, closeDrawer} = createActions({
    OPEN_DRAWER: 'OPEN_DRAWER',
    CLOSE_DRAWER: 'CLOSE_DRAWER'
});*/

export const openDrawer = createAction('openDrawer');
export const closeDrawer = createAction('closeDrawer');