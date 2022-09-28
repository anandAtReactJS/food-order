import  {createStore} from "redux"
import rootred from "./Redux/reducer/main"

const Store = createStore(
    rootred
)
export default Store