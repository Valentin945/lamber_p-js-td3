const initialState = {
  isPending: false
};

const status = (state = initialState, action) => {
  switch (action.type)
  {
    case 'ISPENDING':
       state.isPending =  true
       return state
    default:
       state.isPending = false
       return state
  }
}

export default status;