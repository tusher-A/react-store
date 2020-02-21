import reducer, { todos } from "../todo/reducer/Reducer";
import { createStore } from "../../react-store";

const load = createStore(reducer, todos);

export default load;
