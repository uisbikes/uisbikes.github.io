import { applyMiddleware, configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import { persistStore, persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
    name : null, 
    email: null,  
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "LOGIN": 
            return {
                ...state, 
                name : action.payload.name, 
                email : action.payload.email
            }
        case "LOGOUT": 
            return {
                ...state,
                name: null, 
                email : null
            }
        default: 
            return state;    
    }
} 

const persistConfig = {
    key:'main-root', 
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer : persistedReducer, 
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
});

const Persistor = persistStore(store); 
export {Persistor};
export default store;