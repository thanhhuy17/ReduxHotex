import { createStore } from "redux";
import {rootReducer} from './reducer'
import { composeWithDevTools } from "@redux-devtools/extension";  
const composeWithDevTool = composeWithDevTools();
const store = createStore(rootReducer, composeWithDevTool);

export default store