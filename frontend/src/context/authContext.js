import {useContext, useContext, useEffect} from 'react';

const initialState = {
    user:null,
    role:null,
    token:null,
};
//used to share
const authContext = createContext(initialState);
const authReducer = (state,action) => {
    switch(action.type){
        case 'LOGIN_START':
            return {
               user:null,
               role:null,
               token:null,
            };
        case 'LOGIN_SUCCESS':
            return {
               
                user:action.payload.user,
                role:action.payload.role,
                token:action.payload.token,
            };
        case 'LOGOUT':
            return {
               user:null,
               role:null,
               token:null,
            };
        default:
            return state;
    }
};
export const AuthContextProvide = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const value = {user:state.user, token:state.role, role:state.role, dispatch};
    return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

