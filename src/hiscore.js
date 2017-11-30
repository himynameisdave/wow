import { HISCORE_KEY } from './constants.js';


export default {
    get: () => window.localStorage.getItem(HISCORE_KEY),
    set: score => window.localStorage.setItem(HISCORE_KEY, score),
};
