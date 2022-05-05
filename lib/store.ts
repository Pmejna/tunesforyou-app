import {createStore, action} from 'easy-peasy';

export const store = createStore({
    activeSongs: [],
    activeSong: {},
    changeActiveSongs: action((state: any, payload) => {
        state.activeSongs = payload;
    }),
    changeActiveSong: action((state: any, payload) => {
        state.activeSong = payload;
    })
});