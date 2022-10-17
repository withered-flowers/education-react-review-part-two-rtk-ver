import { configureStore } from "@reduxjs/toolkit";

// import service
import { jikanAPI } from "../services/jikanAPI";

// import service (Part 2)
import { reqresinAPI } from "../services/reqresinAPI";

// export store
export const store = configureStore({
  reducer: {
    // reducer dari services
    [jikanAPI.reducerPath]: jikanAPI.reducer,
    // reducer dari services (Part 2)
    [reqresinAPI.reducerPath]: reqresinAPI.reducer,
  },
  // middleware
  middleware: (getDefaultMiddleware) => {
    return (
      getDefaultMiddleware()
        // middleware dari services
        .concat(jikanAPI.middleware)
        // middleware dari services (Part 2)
        .concat(reqresinAPI.middleware)
    );
  },
});
