import * as actionTypes from '../actions/actionTypes'
const intialState={
    user:{
        name:'',
        email:'',
        type:'admin',
        password:''
    },
    edit:false,
  allUsers:JSON.parse(localStorage.getItem('userData'))
};
const reducer =(state = intialState,action)=>{
    switch (action.type) {
        case actionTypes.SIGNUP:
            return{
                ...state,
                user:action.data,
             allUsers:action.allUsers
        };
        case actionTypes.EDIT:
        return{
          ...state,
          user:action.data.user,
          edit:action.data.edit,
          allUsers:action.allUsers
        };
        case actionTypes.EDITFLAG:
        return{
          ...state,
          edit:action.data
        }
        case actionTypes.DELETE:
        return{
            ...state,
        allUsers:action.allUsers
        };
        default:
            break;
    }
  return state;
};

export default reducer;

