import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore} from 'redux-persist'

import {
    setLocale,
    loadTranslations,
    syncTranslationWithStore,
  } from "react-redux-i18n";
  import translations from "../config/i18n/translations";
import rootReducer from './rootReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
export const store = createStore(
    rootReducer, composeEnhancers(
            applyMiddleware(thunk.withExtraArgument())
    )
);
syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale("AR"));

export const persistor = persistStore(store);

export default { store, persistor }