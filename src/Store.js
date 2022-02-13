import { createStore } from "redux";
import rootReducer from "./component/Redux";

const store = createStore(rootReducer);

export default store;