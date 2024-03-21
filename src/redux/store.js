import { configureStore } from "@reduxjs/toolkit";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
//     persistReducer,
//   persistStore,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { catalogReducer } from "./catalog/catalogSlice";
import { filterReducer } from "./filter/filterSlice";

// const favoritesPersistConfig = {
//   key: "favorites",
//   storage,
//   whitelist: ["favorites"],
// };

export const store = configureStore({
  reducer: {
    // auth: persistReducer(favoritesPersistConfig, ___Reducer),
    catalog: catalogReducer,
    filter: filterReducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});

// export const persistor = persistStore(store);
