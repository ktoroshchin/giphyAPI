const initialState = {
  history: [],
  payload: [],
}

const reducer = (state = initialState, action) => {
  const newState = {...state};

  switch (action.type) {
    case "GIF":
    return{
      ...state,
      history: state.history,
    }
  }
  return newState;


}

export default reducer;