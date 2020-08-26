import axios from 'axios'
export const UPDATE_TITLE ="UPDATE_TITLE"
export const FETCHING_SUCCESS="FETCHING_QUOTE_SUCCESS"
export const FETCHING_START="FETCHING_QUOTE_START"
export const FETCHING_ERROR = "FETCHING_JOKE_ERROR";
export const updateTitle = (newTitle) => {
    return { type: UPDATE_TITLE, payload: newTitle };
  };


  const headers = {
    Accept: "application/json"
  };
    export const fetchData = () => (dispatch) => {
      console.log("Fetching quote action")
      dispatch({ type: FETCHING_START });
      axios
        .get(
          "http://universities.hipolabs.com/search?name=middle&country=Turkey" , { headers: headers }
        ) // { headers })
        .then((res) => {
          console.log("api response::",res.data);
          dispatch({ type: FETCHING_SUCCESS, payload: res.data[0].name});
         
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: FETCHING_ERROR,
            payload: `${err.response.message} code: ${err.response.code}`
          });
        });
    };


    
    
    