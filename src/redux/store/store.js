
import {
    createStore
} from 'redux'
import rootReducer from '../reducers/root.reducer'
/**
 * get store
 */
export default function configureStore() {
    let store = createStore(rootReducer)
    console.log('creating store..............')
    return store
}