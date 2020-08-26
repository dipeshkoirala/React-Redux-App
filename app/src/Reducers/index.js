import {UPDATE_TITLE,FETCHING_START,FETCHING_SUCCESS,FETCHING_ERROR} from '../actions' 


const initialState={
    quote: "Hi , I am from initialState",
    editing:false,
    isFetching:false,
     name:""
}

export const Reducer=(state=initialState,action)=>{
    console.log(`We are going to start here ${state.title},${state.editing}`)
    switch(action.type){
        case UPDATE_TITLE:
            return {
                ...state,
                quote:action.payload,
                editing:false
            };
            case FETCHING_START:
      return {
        ...state,
        isFetching: true,
        // quote:action.payload,
        // error: "",
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        name: action.payload,
        isFetching: false,
      };
      case FETCHING_ERROR:
        return { ...state, error: action.payload, isFetching: false };
            default:
        return state
    }
}